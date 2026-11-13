
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import HotelCard from "../components/HotelCard";
import SearchBar from "../components/SearchBar";
import PriceFilter from "../components/PriceFilter";
import HotelForm from "../components/HotelForm";
import DeleteConfirmation from "../components/DeleteConfirmation";
import Pagination from "../components/Pagination";

import {
  addHotel,
  updateHotel,
  deleteHotel
} from "../redux/hotelActions";

function HotelListPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hotels = useSelector((state) => state.hotels);

  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingHotel, setEditingHotel] = useState(null);

  const [showDelete, setShowDelete] = useState(false);
  const [selectedHotelId, setSelectedHotelId] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const hotelsPerPage = 6;

  const filteredHotels = hotels.filter((hotel) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      hotel.title.toLowerCase().includes(search) ||
      String(hotel.latitude).includes(search) ||
      String(hotel.longitude).includes(search);

    const matchesMin =
      minPrice === "" || Number(hotel.price) >= Number(minPrice);

    const matchesMax =
      maxPrice === "" || Number(hotel.price) <= Number(maxPrice);

    return matchesSearch && matchesMin && matchesMax;
  });

  const totalPages = Math.ceil(filteredHotels.length / hotelsPerPage);

  const startIndex = (currentPage - 1) * hotelsPerPage;

  const currentHotels = filteredHotels.slice(
    startIndex,
    startIndex + hotelsPerPage
  );

  const handleAdd = () => {
    setEditingHotel(null);
    setShowForm(true);
  };

  const handleEdit = (hotel) => {
    setEditingHotel(hotel);
    setShowForm(true);
  };

  const handleSave = (hotelData) => {
    if (editingHotel) {
      dispatch(
        updateHotel({
          ...hotelData,
          id: editingHotel.id
        })
      );
    } else {
      dispatch(
        addHotel({
          ...hotelData,
          id: Date.now(),
          amenities: []
        })
      );
    }

    setShowForm(false);
    setEditingHotel(null);
  };

  const handleDeleteClick = (id) => {
    setSelectedHotelId(id);
    setShowDelete(true);
  };

  const handleDeleteConfirm = (id) => {
    dispatch(deleteHotel(id));
    setShowDelete(false);
    setSelectedHotelId(null);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setMinPrice("");
    setMaxPrice("");
    setCurrentPage(1);
  };

  return (
    <>
      <Header />

      <main className="hotel-list-page">
        <aside className="filter-sidebar">
          <h2>Search & Filters</h2>

          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={(value) => {
              setSearchTerm(value);
              setCurrentPage(1);
            }}
          />

          <PriceFilter
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={(value) => {
              setMinPrice(value);
              setCurrentPage(1);
            }}
            setMaxPrice={(value) => {
              setMaxPrice(value);
              setCurrentPage(1);
            }}
            clearFilters={handleClearFilters}
          />
        </aside>

        <section className="hotel-list-content">
          <div className="hotel-list-heading">
            <div>
              <h1>Hotel Management</h1>
              <p>Manage your hotel details and information.</p>
            </div>

            <button
              type="button"
              className="add-hotel-button"
              onClick={handleAdd}
            >
              + Add Hotel
            </button>
          </div>

          <p className="hotel-count">
            Showing {filteredHotels.length} hotels
          </p>

          <div className="hotel-grid">
            {currentHotels.length > 0 ? (
              currentHotels.map((hotel) => (
                <HotelCard
                  key={hotel.id}
                  hotel={hotel}
                  onView={(id) => navigate(`/hotels/${id}`)}
                  onEdit={handleEdit}
                  onDelete={handleDeleteClick}
                />
              ))
            ) : (
              <p className="no-hotels">No hotels found.</p>
            )}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </section>
      </main>

      {showForm && (
        <HotelForm
          hotel={editingHotel}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingHotel(null);
          }}
        />
      )}

      {showDelete && (
        <DeleteConfirmation
          hotelId={selectedHotelId}
          onConfirm={handleDeleteConfirm}
          onCancel={() => {
            setShowDelete(false);
            setSelectedHotelId(null);
          }}
        />
      )}
    </>
  );
}

export default HotelListPage;

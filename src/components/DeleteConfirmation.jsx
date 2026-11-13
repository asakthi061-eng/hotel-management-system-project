
function DeleteConfirmation({ hotelId, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content delete-modal">
        <h2>Delete Hotel</h2>

        <p>
          Are you sure you want to delete this hotel?
          This action cannot be undone.
        </p>

        <div className="form-actions">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>

          <button
            type="button"
            className="delete-button"
            onClick={() => onConfirm(hotelId)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmation;

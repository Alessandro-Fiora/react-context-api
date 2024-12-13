export default function DeleteModal({ id, title, onClick }) {
  return (
    <>
      <div
        key={id}
        className="modal"
        id={`delete-modal-${id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Cancella {title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Sei sicuro? L'eliminazione è irreversibile
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Annulla
              </button>
              <button
                onClick={() => {
                  onClick(id);
                }}
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Elimina
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

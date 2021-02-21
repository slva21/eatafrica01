import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStickyNote, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const KitchenNotes = ({
  storeNotes,
  onDeleteNote,
  onNoteChange,
  onAddNote,
  note,
}) => {
  return (
    <div className="card mt-2" style={{ width: "inherit" }}>
      <div className="card-body">
        <p className="card-text">
          <FontAwesomeIcon icon={faStickyNote} color="gold" /> Kitchen Notes
          <small className="form-text text-muted d-inline">(Max:3)</small>
        </p>
        <small id="kitchenNote" className="form-text text-muted">
          Appears on Checkout page
        </small>
        <ul className="list-group list-group-flush">
          {storeNotes.map((m) => (
            <Fragment key={m._id}>
              <li className="list-group-item d-flex justify-content-between mb-n2">
                <p
                  className="card-text  "
                  style={{ color: "black", fontFamily: "Poppins" }}
                >
                  {m.note}
                </p>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  color="red"
                  onClick={() => onDeleteNote(m._id)}
                />
              </li>
            </Fragment>
          ))}
        </ul>
        <form className="mt-2">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="kitchenNote"
              onChange={onNoteChange}
              value={note}
            />
          </div>
          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block rounded"
            onClick={onAddNote}
            style={{ fontFamily: "poppins" }}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default KitchenNotes;

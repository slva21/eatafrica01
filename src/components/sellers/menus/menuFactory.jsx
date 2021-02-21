import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStoreAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const MenuFactory = ({ menu, onEditClick }) => {
  return (
    <div className="card mt-2" style={{ width: "21.5rem" }}>
      <div className="card-body">
        <p className="card-text">
          <FontAwesomeIcon icon={faStoreAlt} className=" mr-2 d-inline " />
          THE MENU FACTORY
        </p>
        <table className="table">
          <tbody>
            {menu.map((m) => (
              <tr key={m._id}>
                <td>{m.type.toUpperCase()}</td>
                <td>{m.title}</td>
                <td>
                  <FontAwesomeIcon
                    icon={faEdit}
                    size="lg"
                    color="green"
                    onClick={() => onEditClick(m._id)}
                  />
                </td>
                <td>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    color="red"
                    className="d-inline"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-light btn-lg btn-block">CREATE NEW</button>
      </div>
    </div>
  );
};

export default MenuFactory;

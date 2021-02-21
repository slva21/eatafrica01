import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import DeliveryNotes from "./delveryNote";

const CartItemsSection = (props) => {
  const { cart, onDelete, onEdit, itemTotals, onChange } = props;
  return (
    <ul className="list-group list-group-flush">
      {cart.items.map((m) => (
        <li
          className="list-group-item d-flex justify-content-between"
          id={m._id}
        >
          <FontAwesomeIcon
            icon={faTrashAlt}
            onClick={() => onDelete(m.menu._id._id)}
            color="red"
            className="d-inline"
          />
          <FontAwesomeIcon
            icon={faEdit}
            onClick={() => onEdit(m.menu._id._id)}
            size="lg"
            color="green"
          />
          <h6 className="d-inline mr-1">{`(${m.menu.quantity}X)`}</h6>
          <div>
            <p
              className="d-inline mr-1 font-weight-bold"
              style={{ fontFamily: "poppins" }}
            >
              {m.menu._id.title + ":"}
            </p>
            <small>{`(£${Number(m.menu._id.price).toFixed(2)})`}</small>
            {m.menu.populatedOptions.map((m) => (
              <div id={m.name}>
                <small
                  className="mr-1"
                  style={{ fontFamily: "poppins" }}
                >{`${m.name}:`}</small>
                <small>{`(£${Number(m.price).toFixed(2)})`}</small>
              </div>
            ))}
          </div>

          <div>{`£${Number(
            itemTotals[cart.items.indexOf(m)] * m.menu.quantity
          ).toFixed(2)}`}</div>
        </li>
      ))}
      <DeliveryNotes onChange={onChange} />
    </ul>
  );
};

export default CartItemsSection;

import React from "react";

const RenderItems = ({ order, itemTotals }) => {
  return (
    <ul className="list-group list-group-flush">
      {order.items.map((m) => (
        <React.Fragment key={m._id}>
          <li
            className="list-group-item d-flex justify-content-between"
            id={m._id}
          >
            <h6 className="d-inline mr-1">{`(${m.menu.quantity}X)`}</h6>
            <div>
              <p
                className="d-inline mr-1 font-weight-bold"
                style={{ fontFamily: "poppins" }}
              >
                {m.menu.title + ":"}
              </p>
              <small>{`(£${Number(m.menu.price).toFixed(2)})`}</small>
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
              itemTotals[order.items.indexOf(m)] * m.menu.quantity
            ).toFixed(2)}`}</div>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default RenderItems;

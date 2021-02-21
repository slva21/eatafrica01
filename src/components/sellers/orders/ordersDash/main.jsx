import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "react-spring";

const Main = (props) => {
  const propss = useSpring({
    config: { mass: 1, tension: 150, friction: 14, clamp: false },
    to: { marginLeft: 0, opacity: 1 },
    from: { marginLeft: -500, opacity: 1 },
  });

  return (
    <main className="mt-3">
      <select className="form-control" id="exampleFormControlSelect1">
        <option>Paid</option>
        <option>Completed</option>
        <option>Refunded</option>
      </select>
      <ul className="list-group list-group-flush">
        <animated.div style={propss}>
          {props.orders.map((m) => (
            <li
              className="list-group-item d-flex justify-content-between border-left-0 border-right-0 border-top-0"
              key={m._id}
            >
              <button
                className="btn rounded-pill"
                style={{ backgroundColor: "gold", color: "white" }}
                onClick={() => props.history.push(`/myKitchen/orders/${m._id}`)}
              >
                View
              </button>
              <div>
                <p className="d-inline mr-1" style={{ fontFamily: "poppins" }}>
                  {m.items[0].menu.title}...
                </p>
                <div>
                  <small className="mr-1">
                    {m.date} at {m.time}
                  </small>
                </div>
              </div>
              <h6 className="d-inline mr-1">({m.items.length}X)</h6>
              <div>£{Number(m.total).toFixed(2)}</div>
            </li>
          ))}
        </animated.div>
      </ul>
    </main>
  );
};

export default Main;

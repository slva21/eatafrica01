import React , { useState }  from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ShowAddress from "./showAddress"


const AddressList = ({userInfo}) => {

    const [currentAddress, setCurrentAddress] = useState(0);

    return ( 
        <div class="card mt-3" style={{ maxWidth: "100%" }}>
        <ul class="list-group list-group-flush">
          {userInfo.address.map((m) => (
            <li
              class="list-group-item"
              style={{ fontFamily: "poppins" }}
              key={m._id}
            >
              <div className="d-flex justify-content-between">
                <p onClick={() => setCurrentAddress(m._id)}>
                  {m.addressLine1}, {m.postcode}
                </p>
                {currentAddress == m._id && (
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    color="gold"
                    size="lg"
                    onClick={() => setCurrentAddress("")}
                  />
                )}
                <FontAwesomeIcon icon={faTrashAlt} color="red" size="lg" />
              </div>

              {currentAddress == m._id && <ShowAddress m={m} />}
            </li>
          ))}
        </ul>
      </div>
     );
}
 
export default AddressList;
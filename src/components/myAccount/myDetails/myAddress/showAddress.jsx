import React from "react";

const ShowAddress = ({ m }) => {
  return (
    <div>
      <div class="mt-3">
        <input
          readonly
          type="text"
          style={{
            backgroundColor: "#e9ecef",
            color: "",
            fontFamily: "poppins",
          }}
          value={m.addressLine1}
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="AddressLine 1"
        />
      </div>
      <div class="mt-3">
        <input 
          readonly
          style={{
            backgroundColor: "#e9ecef",
            color: "",
            fontFamily: "poppins",
          }}
          type="text"
          value={m.addressLine2}
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="AddressLine 1"
        />
      </div>
      <div class="mt-3">
        <input
          readonly
          style={{
            backgroundColor: "#e9ecef",
            color: "",
            fontFamily: "poppins",
          }}
          type="text"
          value={m.postcode}
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="AddressLine 1"
        />
      </div>
    </div>
  );
};

export default ShowAddress;

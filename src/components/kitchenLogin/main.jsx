import React from "react";
import Credentials from "./topSection";

const Main = ({ onSubmit, onChange }) => {
  return (
    <main>
      <Credentials onSubmit={onsubmit} onChange={onChange} />
      <div className="border-top mt-4">
        <p>
          So you want to become a seller? Create your kitchen now and turn your
          passion of cooking into a business 🤑🤑. The best part is its
          completely FREE to sign up and start serving your customers!
        </p>
      </div>
    </main>
  );
};

export default Main;

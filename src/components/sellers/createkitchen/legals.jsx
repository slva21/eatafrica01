import React from "react";

const Legals = (props) => {
  return (
    <main>
      <div
        className="mb-3 mt-4 d-flex align-items-center "
        style={{ height: "73vh" }}
      >
        <div style={{ width: "100%" }}>
          <div className="mb-3 mt-4 pt-4 d-flex justify-content-center">
            <h5>Terms & Conditions</h5>
          </div>
          <div className="mb-3 mt-3 d-flex justify-content-center">
            <p
              style={{
                overflowY: "scroll",
                scrollBehavior: "smooth",
                height: "55vh",
                textAlign: "justify",
                marginBottom: 140,
              }}
            >
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham psum dolor sit amet..", comes from a
              line in section 1.10.32. The standard chunk of Lorem Ipsum used
              since the 1500s is reproduced below for those interested. Sections
              1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
              are also reproduced in their exact original form, accompanied by
              English versions from the 1914 translation by H. Rackham H.
              Rackham psum dolor sit amet..", comes from a line in section
              1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham
            </p>
          </div>
          <div
            className="form-check"
            style={{
              width: "100%",
              backgroundColor: "white",
              position: "fixed",
              bottom: 140,
              paddingBottom: 20,
            }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              I Accept Jesus as my Lord and Savior
            </label>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Legals;

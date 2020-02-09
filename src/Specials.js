import React from "react";

const Specials = () => {
  return (
    <div className="Specials text-center mt-5">
      <section>
        <h1>Specials</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                src="https://images.unsplash.com/flagged/photo-1578521887311-3a7aff0f17f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                alt=""
              />
              <h3>Jeans 20% off!</h3>
            </div>
            <div className="col">
              <img
                src="https://images.unsplash.com/photo-1561538286-b4561e7956c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                alt=""
              />
              <h3>Tops 20% off!</h3>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default Specials;

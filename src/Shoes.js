import React from "react";

const Shoes = () => {
  return (
    <div className="Shoes text-center">
      <h1>Shoes</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              className="hvr-grow"
              src="https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=853&q=80"
              alt=""
            />
          </div>

          <div className="col">
            <img
              className="hvr-grow"
              src="https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
              alt=""
            />
          </div>

          <div className="col">
            <img
              className="hvr-grow"
              src="https://images.unsplash.com/photo-1544327415-cfb77383dabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
              alt=""
            />
          </div>

          <div className="col">
            <img
              className="hvr-grow"
              src="https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Shoes;

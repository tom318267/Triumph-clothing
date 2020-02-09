import React from "react";

const Home = () => {
  return (
    <div className="Home overlay text-center">
      <h1 className="header display-1 tracking-in-expand">
        TRIUMPH <span id="inc">INC.</span>
      </h1>
      <p className="lead text-focus-in ">For your authentic self.</p>
      <div>
        <button
          id="sign-up"
          className="home-button btn btn-primary btn-lg mt-5 hvr-border-fade"
        >
          Sign Up
        </button>
        <button
          id="login"
          className="home-button btn btn-primary btn-lg mt-5 hvr-border-fade "
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;

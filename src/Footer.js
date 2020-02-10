import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <ul
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <li>Triumph Inc. Copyright &copy; 2020</li>
          <li>All rights reserved.</li>
          <BrowserRouter>
            <div id="social">
              <Link to="#">
                <i class="fab fa-facebook"></i>
              </Link>
              <Link to="#">
                <i class="fab fa-twitter"></i>
              </Link>
              <Link to="#">
                <i class="fab fa-instagram"></i>
              </Link>
            </div>
          </BrowserRouter>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;

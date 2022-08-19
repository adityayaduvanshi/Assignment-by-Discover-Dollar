import React from "react";

import BeatsSolo from "../images/beats-solo.webp";

const Home = () => {
  return (
    <div>
      <div className="hero-banner-container">
        <div>
          <p className="beats-solo">Beats Solo 3</p>
          <h3>Summer Sale</h3>
          <h1>FINE</h1>
          <img src={BeatsSolo} alt="headphones" className="hero-banner-image" />
          <div>
            <button type="button">Shop Now</button>

            <div className="desc">
              <h5>Description</h5>
              <p>Best Selling Headphone</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p className="footer_text">
          Made by{" "}
          <a
            href="https://adityayads.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            Aditya Yaduvanshi.
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;

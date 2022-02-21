import React from "react";
import Navbar from "../../Components/navbar/Navbar";
import "./home.scss";
function Home() {
  return (
    <div id="home" className="home">
      <Navbar />
      <div className="home-quote">
        <hr />
        <div className="quote-container">
          <h1 className="quote">
            "Business Promoz" carries a rich experience of more than 16 years in
            Events and Advertisements in Insin Market and has stepped its feet
            in the International Market for the last few years.
          </h1>
        </div>
        <div className="videoContainer">
          <iframe
            src="https://player.vimeo.com/video/677438996?h=6eec8d3da5"
            width="500"
            height="300"
            frameborder="0"
            allow="autoplay;"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/hero.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> National Dodgeball</h1>
        <h1>Club</h1>
        <p> Discover your true potential. </p>
        <Link to="/about">
          <button> Learn More </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
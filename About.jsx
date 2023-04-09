import React from "react";
import AboutImage from "../assets/about.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to the National Dodgeball Club, where we live and breathe the high-energy and fast-paced game of dodgeball. Our club is dedicated to promoting and advancing the sport of dodgeball in the nation by providing a safe and supportive environment for players of all ages and skill levels to learn, train, and compete.<br></br>
        Founded in 2008, the National Dodgeball Club is comprised of 26 leagues and counting across the nation. All teams
        regionally or state, can register to join the National Dodgeball Club in their local league and compete nationally.
        Our team of experienced coaches and staff is committed to helping each player reach their full potential, whether they are just starting out or aiming for a spot on the national team. With access to top-notch facilities and equipment, our members can expect nothing but the best training and playing experience. Join us and become part of a vibrant community of dodgeball enthusiasts who share your passion for the game. Whether you're looking for a fun way to stay active or have your sights set on becoming a world champion, the National Dodgeball Club is the place to be. <br></br> Let's play!
        </p>
      </div>
    </div>
  );
}

export default About;
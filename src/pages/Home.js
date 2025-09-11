import React from "react";
import HeroMotion from "../components/HeroMotion";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#f6faf8" }}>
      {/* Framer Motion Hero Section */}
      <HeroMotion />

      {/* Additional homepage content goes here */}
      <div style={{ margin: "2rem auto", maxWidth: 700, padding: "0 1rem" }}>
        <h2 style={{ color: "#243c36" }}>Discover Your Next Adventure</h2>
        <p style={{ color: "#4b6960", fontSize: "1.1rem" }}>
          Bon-Journee helps you plan and embark on memorable hiking journeys. Explore trails, connect with fellow hikers, and share your experiences!
        </p>
        {/* You can add more sections, images, or components below */}
      </div>
    </div>
  );
};

export default Home;

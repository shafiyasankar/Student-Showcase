
import React from "react";

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-text">
        <span className="hero-label">
          MEGA SHOPPING FESTIVAL
        </span>

        <h1>
          Big Deals.<br />
          Better Shopping.
        </h1>

        <p>Discover amazing products at unbelievable prices.</p>

        <a href="#products">Explore Products →</a>
      </div>

      <div className="hero-art">🛍️</div>
    </section>
  );
}

export default HeroBanner;

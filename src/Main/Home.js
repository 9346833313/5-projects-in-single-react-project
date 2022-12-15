import React from 'react'
import { useState, useEffect } from "react";
import "./home.css"

export default function Home() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const renderContent = () => (
      <>
        <div className="Parallax__content__heading">
          <h1 className="Parallax__content__heading__text">API PROJECTS</h1>
          <h2 className="Parallax__content__heading__caption">
            HTML, CSS, Javascript & React
          </h2>
        </div>
        <div className="Parallax__content__cta">
          <p style={{fontSize:"5rem"}}>ANITHA</p>
          <p>FRONT END DEVELOPER</p>
          <h1>TECHNICAL SKILLS ARE:</h1>
          <p>HTML</p>
          <p>CSS</p>
          <p>JAVASCRIPT</p>
          <p>BOOTSTRAP</p>
          <p>REACT</p>
        </div>
      </>
    );
  
    return (
      <section className="Parallax">
        <div
          className="Parallax__background"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        />
        <div
          className="Parallax__background-triangles"
          style={{ transform: `translateY(${offsetY * 0.8}px)` }}
        />
        <div className="Parallax__content">{renderContent()}</div>
      </section>
    );
}

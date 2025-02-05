import React from "react";
import "./workout-gallery.css";
import img1 from "../images/img5.jpeg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpeg";
import img4 from "../images/img4.jpeg";
import img5 from "../images/img6.jpeg";
import { Container, Title } from "../../global";

export default function WorkoutGallery() {
  return (
    <div className="gallery-container">
      <Container>
        <section className="gallery" id="gallery">
          <Title>Galerija</Title>

          <div className="content">
            <div className="box wow slideInLeft">
              <img src={img1} alt="gallery" />
            </div>
            <div className="box wow slideInRight">
              <img src={img2} alt="gallery" />
            </div>

            <div className="box wow slideInRight">
              <img src={img4} alt="gallery" />
            </div>
            <div className="box wow slideInLeft">
              <img src={img3} alt="gallery" />
            </div>
            <div className="box wow slideInLeft">
              <img src={img5} alt="gallery" />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

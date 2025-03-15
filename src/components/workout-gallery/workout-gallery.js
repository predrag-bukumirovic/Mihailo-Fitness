import React, { useEffect, useState } from "react";
import "./workout-gallery.css";
import img1 from "../images/img5.jpeg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpeg";
import img4 from "../images/img4.jpeg";
import img5 from "../images/img6.jpeg";
import img6 from "../images/img7.jpeg";
import img7 from "../images/homeImage.png";
import { Container, Title } from "../../global";

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function WorkoutGallery() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const handlePrev = () => {
      setSelectedImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
      setSelectedImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleClose = () => {
      setSelectedImageIndex(null);
    };

      const handleKeyDown = event => {
        if (selectedImageIndex !== null) {
          if (event.key === "ArrowLeft") {
            handlePrev();
          } else if (event.key === "ArrowRight") {
            handleNext();
          } else if (event.key === "Escape") {
            handleClose();
          }
        }
      };

       useEffect(() => {
         window.addEventListener("keydown", handleKeyDown);
         return () => {
           window.removeEventListener("keydown", handleKeyDown);
         };
       });

  return <div className="gallery-container">
      <Container>
        <section>
          <Title>Galerija</Title>

          <div className="gallery-container wrapper">
            {images.map((src, index) =>
              <div
                className="gallery-item"
                key={index}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img src={src} alt="Slike galerije" />
              </div>
            )}
          </div>

          {selectedImageIndex !== null && <div className="modal">
              <span className="close" onClick={handleClose}>
                &times;
              </span>
              <img className="modal-content" src={images[selectedImageIndex]} alt="Selected" />
              <span className="prev" onClick={handlePrev}>
                &#10094;
              </span>
              <span className="next" onClick={handleNext}>
                &#10095;
              </span>
            </div>}
            
        </section>
      </Container>
    </div>;
}

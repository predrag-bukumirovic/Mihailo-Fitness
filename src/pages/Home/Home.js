import React from "react";
import "./home.css";
import homeImg from "../../components/images/home-image.jpg";
import homeImg4 from "../../components/images/banerProba.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Price from "../../components/price/Price";
import WorkoutGallery from "../../components/workout-gallery/workout-gallery";
import { Container } from "../../global";
import ScrollBottomIcon from "../../components/images/down.png";
import Testimonial from "../../components/testimonial/testimonial";

function Home() {
  return (
    <>
      <Container>
        <div className="container-slide">
          <section className="home">
            <Carousel
              autoPlay={true}
              infiniteLoop
              emulateTouch
              showStatus={false}
              showThumbs={false}
            >
              <div className="slide-bar">
                <img className="big-img" src={homeImg4} alt="Slika Home 1" />
              </div>
              <div className="slide-bar">
                <img className="big-img" src={homeImg} alt="Slika Home 2" />
              </div>
            </Carousel>
            <a href="#price" className="go-down">
              <img src={ScrollBottomIcon} alt="Scroll img" />
            </a>
          </section>
        </div>
      </Container>
      <Price />
      <Testimonial />
      <WorkoutGallery />
    </>
  );
}

export default Home;

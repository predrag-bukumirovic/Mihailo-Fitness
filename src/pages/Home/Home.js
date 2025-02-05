import React from "react";
import "./home.css";
import homeImg4 from "../../components/images/homeImage.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Price from "../../components/price/Price";
import WorkoutGallery from "../../components/workout-gallery/workout-gallery";
import Testimonial from "../../components/testimonial/testimonial";

function Home() {
  return (
    <>
        <div className="container-slide">
          <section className="home">
            <div className="bg">

              <div>
                <h1>Vaš put ka zdravijem životu počinje ovde!</h1>
                <p>Kroz personalizovane treninge, prilagođeneu ishranu i stalnu podršku, zajedno ćemo ostvariti rezultate koje ste oduvek želeli.</p>
                <a href="/kontakt">Zakaži trening</a>
              </div>
            
            </div>
    
              <div className="slide-bar">
                <img className="big-img" src={homeImg4} alt="Slika Home 1" />
              </div>
          </section>
        </div>
      <Price />
      <Testimonial />
      <WorkoutGallery />
    </>
  );
}

export default Home;

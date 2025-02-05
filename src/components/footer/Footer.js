import React from "react";
import "./footer.css";
import Logo from "../../components/images/Mihailo.svg";
import {Container} from '../../global'

function Footer() {
  return (
    <>
      <div className="footer">

        <Container style={{marginTop: 0}}>
          <div className="container-footer">
              <div className="about-footer">
              <img src={Logo} alt="Footer slika" />
                <a
                  className="instagram"
                  href="https://www.instagram.com/mihailo_zivanovic/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Zapratite me na Instagram profilu
                </a>
            </div>

            <div className="info-footer">
              <span>Mapa sajta</span>
              <ul>
                <li><a href="/">Početna</a></li>
                <li><a href="/biografija">Biografija</a></li>
                <li><a href="/trening-uzivo">Uživo trening</a></li>
                <li><a href="/online-trening">Online trening</a></li>
                <li><a href="/plan-ishrane">Plan ishrane</a></li>
                <li><a href="/kontakt">Kontakt</a></li>
              </ul>
            </div>

            <div className="info-footer">
              <span>Kontakt</span>
              <div className="phone-number">
                <a href="tel:060-073-7363">

                  <span className="info-text">+381 600737363</span>
                </a>
              </div>
              <div className="email">
                <a href="mailto: mihailofitness@gmail.com">
                  <span className="info-text">mihailofitness@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          </Container>
      </div>

      <div className="copyright">
        © Mihailo Živanović 2021. | by&nbsp;
        <a
          className="link-blue"
          href="https://www.gold-digital.rs"
          target="_blank"
          rel="noreferrer"  
        >
          Gold Digital Agency
        </a>
      </div>
    </>
  );
}

export default Footer;

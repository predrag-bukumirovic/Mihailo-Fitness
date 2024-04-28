import React from "react";
import "./price.css";
import imgPlanIshrane from "../images/plan-ishrane.jpg";
import imgOnline from "../images/online-trening1.jpg";
import imgLive from "../images/uzivo-trening-img.jpeg";
import { Button, Container, Title } from "../../global";
import scrollTopPage from "../../global";
import "../../global.css";

export default function Price() {
  return (
    <Container>
      <section className="price-package" id="price">
        <Title>Izaberite svoj paket</Title>

        <div className="content">
          <div className="box">
            <div className="inner">
              <div className="price-tag">
                Uživo trening <br />
                <span className="price">Cena na upit</span>
              </div>
              <div className="img">
                <img src={imgLive} alt="price" />
              </div>
              <div className="text">
                <p>- Uživo trening sa trenerom u teretani</p>
                <p>- Trening traje 1h</p>
                <p>- Konsultacije sa trenerom</p>
              </div>
              <Button
                className="btn"
                title="Saznaj vise o treningu uzivo"
                onClick={scrollTopPage}
                href="/trening-uzivo/"
              >
                Saznaj više
              </Button>
            </div>
          </div>
          <div className="box">
            <div className="inner">
              <div className="price-tag">
                Online trening
                <br />
                <span className="price">Cena na upit</span>
              </div>
              <div className="img">
                <img src={imgOnline} alt="price" />
              </div>
              <div className="text">
                <p>- Plan i program treninga</p>
                <p>- Praćenje napretka</p>
                <p>- Konstantna podrška trenera</p>
                <p>- Konsultacije sa trenerom online</p>
              </div>
              <Button
                className="btn"
                title="Saznaj vise o online treningu"
                onClick={scrollTopPage}
                href="/online-trening/"
              >
                Saznaj više
              </Button>
            </div>
          </div>
          <div className="box">
            <div className="inner">
              <div className="price-tag">
                Plan ishrane <br />
                <span className="price">6.000 rsd</span>
              </div>
              <div className="img">
                <img src={imgPlanIshrane} alt="price" />
              </div>
              <div className="text">
                <p>
                  - Tvoj plan ishrane omogućava ti da uneseš tačnu količinu
                  kalorija
                </p>
                <p>- Konsultacije sa trenerom u vezi ishrane</p>
                <p>- Spisak suplemenata i namernica</p>
              </div>
              <Button
                className="btn"
                title="Saznaj vise o planu ishrane"
                onClick={scrollTopPage}
                href="/plan-ishrane/"
              >
                Saznaj više
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

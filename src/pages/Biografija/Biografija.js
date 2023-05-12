import React from "react";
import { Helmet } from "react-helmet";
import Img from "../../components/images/miha5.jpg";
import { Container, Title } from "../../global";
import "./biografija.css";

function Biografija() {
  return (
    <Container>
      <Helmet>
        <title>Biografija | Mihailo Zivanovic</title>
        <meta
          name="description"
          content="Profesor sporta i fizičkog vaspitanja. Sa 8 godina sam počeo da
          treniram rukomet. Do svoje 22 godine bavio sam se profesionalno
          rukometom, igrajući za Metaloplastiku u regionalnoj Seha ligi.
          Volim sport i zdrave životne navike. Pričinjava mi veliko
          zadovoljstvo da pomažem ljudima u prenošenju svog znanja i
          iskustva. Ambiciozan, posvećen i predan, trudim se da se svaki naš
          član oseća ugodno,vedro i motivisano, kako tokom tako i nakon
          svakog treninga."
        />
      </Helmet>
      <div className="biography-wrapper">
        <Title style={{ marginTop: "30px" }}>
          Personalni trener
          <br />
          Mihailo Živanović
        </Title>

        <div className="container-biography">
          <div className="biography-img">
            <img src={Img} alt="Slika Biografije" />
          </div>
          <div className="info">
            <h3>Mihailo Živanović</h3>
            <p>
              Profesor sporta i fizičkog vaspitanja. Sa 8 godina sam počeo da
              treniram rukomet. Do svoje 22 godine bavio sam se profesionalno
              rukometom, igrajući za Metaloplastiku u regionalnoj Seha ligi.
              Volim sport i zdrave životne navike. Pričinjava mi veliko
              zadovoljstvo da pomažem ljudima u prenošenju svog znanja i
              iskustva. Ambiciozan, posvećen i predan, trudim se da se svaki naš
              član oseća ugodno,vedro i motivisano, kako tokom tako i nakon
              svakog treninga.
            </p>
            <p>Životni moto: SVAKOG DANA IZVUĆI SVOJ MAKSIMUM</p>

            <h3>Specijalnost</h3>
            <ul>
              <li>Vođenje personalnih treninga</li>
              <li>Plan ishrane</li>
              <li>Vođenje grupnih programa</li>
              <li>Gubitak kilograma</li>
              <li>Oblikovanje tela</li>
              <li>Oporavak od povreda</li>
              <li>Postizanje mišićne mase</li>
              <li>Funkcionalni treninzi</li>
            </ul>

            <h3>Sertifikati</h3>
            <ul>
              <li>Kurs za personalnog trenera</li>
              <li>Kurs prve pomoći</li>
              <li>Kurs za spasioca na vodi</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Biografija;

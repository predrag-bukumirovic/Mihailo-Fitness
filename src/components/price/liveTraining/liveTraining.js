import React from "react";
import { Container, Submit, Title } from "../../../global";
import "./liveTraining.css";
import BigImgLive from "../../images/uzivo-trening-img.jpeg";
import { Helmet } from "react-helmet";

export default function LiveTraining() {

  return <Container>
      <Helmet>
        <title>Uzivo trening | Mihailo Zivanovic</title>
        <meta name="description" content="Najperspektivniji vid saradnje. Prenošenje iskustva kroz dinamične i zanimljive treninge.
          Uživo treninzi su najmerodavniji i najkomplentniji vid saradnje, jer kroz sistem 1 na 1(trener-klijent), trener objašnjava, demonstrira, ukazuje i ispravlja pojedine tehničke greške oko motorike i samog pokreta.
          Trener koriguje tehniku na licu mesta, i automatizuje pravilno disanje kroz vežbu.
          Kroz uživo treninge trener iz klijenta izvlači 'potencijal', predispoziciju za naredne i kompleksnije vežbe." />
      </Helmet>
      <Title style={{ marginTop: "30px" }}>Uživo trening</Title>

      <div className="live-image">
        <img src={BigImgLive} alt="Slika Live trening" />
      </div>
      <div className="text">
        <p>
          Najperspektivniji vid saradnje. Prenošenje iskustva kroz dinamične i
          zanimljive treninge.
        </p>
        <p>
          Uživo treninzi su najmerodavniji i najkomplentniji vid saradnje, jer
          kroz sistem 1 na 1(trener-klijent), trener objašnjava, demonstrira,
          ukazuje i ispravlja pojedine tehničke greške oko motorike i samog
          pokreta.
        </p>
        <p>
          Trener koriguje tehniku na licu mesta, i automatizuje pravilno
          disanje kroz vežbu.
        </p>
        <p>
          Kroz uživo treninge trener iz klijenta izvlači "potencijal",
          predispoziciju za naredne i kompleksnije vežbe.
        </p>
        <p>
          Trener razmišlja za vas, vodi vas kroz trening, usmerava, pakuje
          tegove, asistira, motiviše, ali nikako ne može da radi za Vas, to
          već Vi morate da stegnete zube i zasučete rukave, ali neće Vam
          predstavljati težinu jer ćete znati kako.
        </p>
        <p>
          Takođe Vas isteže, neizbežan deo treninga oko oporavka i dovođenja
          organizma do smirenja nakon glavnog dela treninga.
        </p>
        <p>
          Ako se odlučite za ovaj vid saradnje, nećete se pokajati ni
          pogrešiti, a to ću posvećenošću i zalaganjem opravdati, i biće mi
          zadovoljstvo da zajedno prolazimo kroz proces i progres.
        </p>
        <p>Za ovaj vid saradnje pošaljite upit za više informacija.</p>

        <h5>Trening uživo podrazumeva</h5>
        <ul>
          <li>Merenje i testiranje</li>
          <li>Praćenje napretka i vođenje ka željenom cilju</li>
          <li>Sastavlja plan koji je prilagođen tebi</li>
          <li>Vodi računa da svaku vežbu izvodiš pravilno</li>
          <li>Motiviše te da postigneš maksimum</li>
        </ul>
        <p style={{ textTransform: "uppercase", fontSize: "20px" }}>
          Napravite pravi izbor, svako dobro!
        </p>
      </div>

      <div className="text">
        <p>
          Treninzi se održavaju u {""}
          <a className="link-blue" target="_blank" href="https://maps.app.goo.gl/3GKRGbX24zaTXY8g9" rel="noreferrer">
            Planet Gym & Fitness.
          </a>
        </p>
      </div>

      <ul className="text">
        <p>Zakažite uživo trening:</p>
        <li style={{ marginBottom: 50 }}>
          <span>
            <b>Pozovite broj telefona </b>
          </span>
          <a className="link-blue" href="tel:060-073-7363">
            +381 600737363
          </a>
        </li>

        <a href="/kontakt">
          <Submit>Stupi u kontakt sa trenerom</Submit>
        </a>
      </ul>
    </Container>;
}

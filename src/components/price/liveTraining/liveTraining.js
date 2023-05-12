import React, { useState } from "react";
import { Container, Submit, Title } from "../../../global";
import "./liveTraining.css";
import emailjs from "emailjs-com";
import BigImgLive from "../../images/uzivo-trening-img.jpeg";
import { Helmet } from "react-helmet";
import { Slide, Snackbar, Button, IconButton } from "@material-ui/core";

export default function LiveTraining() {
  const [open, setOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wmtdkul",
        "template_1yom5lr",
        e.target,
        "fJ6s2lZ-3_8CYIreA"
      )
      .then(
        (result) => {
          console.log(result.text);
          setOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const closeAlertMessage = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Helmet>
        <title>Uzivo trening | Mihailo Zivanovic</title>
        <meta
          name="description"
          content="Najperspektivniji vid saradnje. Prenošenje iskustva kroz dinamične i zanimljive treninge.
          Uživo treninzi su najmerodavniji i najkomplentniji vid saradnje, jer kroz sistem 1 na 1(trener-klijent), trener objašnjava, demonstrira, ukazuje i ispravlja pojedine tehničke greške oko motorike i samog pokreta.
          Trener koriguje tehniku na licu mesta, i automatizuje pravilno disanje kroz vežbu.
          Kroz uživo treninge trener iz klijenta izvlači 'potencijal', predispoziciju za naredne i kompleksnije vežbe."
        />
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
          Trener koriguje tehniku na licu mesta, i automatizuje pravilno disanje
          kroz vežbu.
        </p>
        <p>
          Kroz uživo treninge trener iz klijenta izvlači "potencijal",
          predispoziciju za naredne i kompleksnije vežbe.
        </p>
        <p>
          Trener razmišlja za vas, vodi vas kroz trening, usmerava, pakuje
          tegove, asistira, motiviše, ali nikako ne može da radi za Vas, to već
          Vi morate da stegnete zube i zasučete rukave, ali neće Vam
          predstavljati težinu jer ćete znati kako.
        </p>
        <p>
          Takođe Vas isteže, neizbežan deo treninga oko oporavka i dovođenja
          organizma do smirenja nakon glavnog dela treninga.
        </p>
        <p>
          Ako se odlučite za ovaj vid saradnje, nećete se pokajati ni pogrešiti,
          a to ću posvećenošću i zalaganjem opravdati, i biće mi zadovoljstvo da
          zajedno prolazimo kroz proces i progres.
        </p>
        <p>
          Za ovaj vid saradnje pošaljite upit za više informacija.
        </p>

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

      {/* <p className="text">
        U cenu nije uračunata mesečna članarina. Cene mesečnih članarina možete
        pogledati {""}
        <a
          href="https://nonstopfitness.rs/cenovnik-3/"
          className="link-blue"
          onClick={scrollTopPage}
          target="_blank"
          rel="noreferrer"
        >
          ovde.
        </a>
      </p> */}
      {/* <div className="table-price">
        <table>
          <caption>
            <h3>Trening 1 na 1</h3>
          </caption>
          <thead>
            <tr>
              <th>Paketi</th>
              <th>Cene paketa</th>
              <th>Trajanje paketa</th>
            </tr>
          </thead>
       
          <tbody>
          <tr>
            <td>PT1 (1 termin)</td>
            <td>
              <span className="price">1620</span>{" "}
              <span className="currency">RSD</span>
            </td>
            <td>7 dana</td>
          </tr>
          <tr>
            <td>PT8 (8 termina)</td>
            <td>
              <span className="price">11520</span>{" "}
              <span className="currency">RSD</span>
            </td>
            <td>30 dana</td>
          </tr>
          <tr>
            <td>PT12 (12 termina)</td>
            <td>
              <span className="price">16416</span>{" "}
              <span className="currency">RSD</span>
            </td>
            <td>30 dana</td>
          </tr>
          <tr>
            <td>PT16 (16 termina)</td>
            <td>
              <span className="price">20736</span>{" "}
              <span className="currency">RSD</span>
            </td>
            <td>45 dana</td>
          </tr>
          </tbody>
         
        </table>
        <table>
          <caption>
            <h3>DUO Trening</h3>
          </caption>
          <thead>
          <tr>
            <th>Paketi</th>
            <th>Cene paketa</th>
            <th>Trajanje paketa</th>
          </tr>
          </thead>
        
        <tbody>
        <tr>
            <td>PT DUO 1 (1 termin)</td>
            <td>
              <span className="price">1296</span>
              <span className="currency"> RSD</span> (po osobi)
            </td>
            <td>7 dana</td>
          </tr>
          <tr>
            <td>PT DUO 8 (8 termina)</td>
            <td>
              <span className="price">9216</span>
              <span className="currency"> RSD</span> (po osobi)
            </td>
            <td>30 dana</td>
          </tr>
          <tr>
            <td>PT DUO 12 (12 termina)</td>
            <td>
              <span className="price">12960</span>
              <span className="currency"> RSD</span> (po osobi)
            </td>
            <td>30 dana</td>
          </tr>
          <tr>
            <td>PT DUO 16 (16 termina)</td>
            <td>
              <span className="price">16128</span>
              <span className="currency"> RSD</span> (po osobi)
            </td>
            <td>45 dana</td>
          </tr>
        </tbody>
        
        </table>
      </div> */}

      <div className="text">
        <p>
          Treninzi se održavaju u {""}
          <a className="link-blue" href="https://goo.gl/maps/ptAjdqiu5ZUGwSJX9">
            Non Stop Fitness - Big Fashion Park.
          </a>
          , ali postoji mogućnost kroz dogovor da neki treninzi budu i na drugim
          lokacijama Non Stop Fitness teretana.
        </p>
      </div>

      <ul className="text">
        <p>Zakažite uživo trening:</p>
        <li>
          <span>
            <b>Pozovite broj telefona </b>
          </span>
          <a className="link-blue" href="tel:060-073-7363">
            +381 600737363
          </a>
          <br />
          ili
        </li>
        <li>
          <b>Popunite polja ispod i pošaljite</b>
        </li>
      </ul>
      <form className="form-online-training text" onSubmit={sendEmail}>
        <div className="label-box">
          <label>Ime i Prezime</label>
          <span className="star"> *</span>
        </div>
        <input
          type="text"
          name="fullName"
          placeholder="Vaše ime i prezime..."
          required
        />

        <div className="label-box">
          <label>Broj telefona</label>
          <span className="star"> *</span>
        </div>
        <input
          type="number"
          name="phoneNumber"
          placeholder="Vaš broj telefona..."
          required
        />
        <div className="label-box">
          <label>Email</label>
          <span className="star"> *</span>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Vaša email adresa..."
          required
        />
        <input
          className="theme-input"
          type="text"
          name="theme"
          defaultValue="Uživo trening"
          required
        />
        <div className="change">podatak iz ovog polja se ne može promeniti</div>
        <br />
        <Button style={{ padding: 0 }}>
          <Submit>Zakaži trening</Submit>
        </Button>
      </form>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        TransitionComponent={Slide}
        open={open}
        autoHideDuration={2000}
        message="Uspešno ste zakazali uživo trening. Hvala!"
        action={
          <IconButton onClick={closeAlertMessage}>
            <i style={{ color: "#fff" }} className="uil uil-times"></i>
          </IconButton>
        }
      />
    </Container>
  );
}

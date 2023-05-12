import React, { useState } from "react";
import { Container, Submit, Title } from "../../../global";
import "./onlineTraining.css";
import onlineImage from "../../images/online-trening-Big.jpg";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet";
import "../../../global";
import { IconButton, Slide, Snackbar } from "@material-ui/core";

export default function OnlineTraining() {
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
        <title>Online trening | Mihailo Zivanovic</title>
        <meta
          name="description"
          content="Online trening jeste sve ono što bi bilo u praksi 1 na 1, samo je online, kroz vođenje i praćenje procesa sve vreme.
          Online trening podrazumeva međusobnu interakciju između trenera i klijenta, a to se se odnosi na:"
        />
      </Helmet>
      <Title style={{ marginTop: "30px" }}>Online trening</Title>

      <div className="online-image">
        <img src={onlineImage} alt="Slika online trening" />
      </div>
      <div className="text">
        <p>
          Online trening jeste sve ono što bi bilo u praksi 1 na 1, samo je
          online, kroz vođenje i praćenje procesa sve vreme.
        </p>

        <p>
          Online trening podrazumeva međusobnu interakciju između trenera i
          klijenta, a to se odnosi na:
        </p>
        <ul>
          <li>slanje vežbi i sam trening</li>
          <li>opis vežbe i naglašeno pravilno izvođenje</li>
          <li>
            slanje povratnih informacija(tekstom ili eventualnim video
            klipovima, ako je potrebno vezano za samo izvođenje pojedinih vežbi,
            kao i tehnike istih)
          </li>
          <li>vizuelno praćenje kroz slike </li>
          <li>
            plan ishrane i smernice oko unosa vitamina i suplemenata(GRATIS)
            <span className="star"> *</span>
          </li>
          <li>motivaciju i istrajnost da klijenti uspeju u zadatom cilju</li>
        </ul>
        <p>
          Za nekoga ko nije u mogućnosti da bude sa trenerom, jer živi u drugom
          gradu ili državi, ovo je idealan način za ostvarivanje uspeha.
        </p>
        <p>
          Takođe benefit online treninga je finansijski deo, jer je
          prilagođeniji za osobe koje ne mogu da priušte trenera da "izvlači" iz
          njih potencijal uživo.
        </p>
        <p>
          Pristupačnost kao stavka se odnosi na uzajamnu profesijalnost i
          kolegijalnost, kada je u pitanju vreme i mesto održavanja treninga.
          (Recimo neko želi da trenira ujutru, neko u podne, neko uveče.)
        </p>
        <p>
          Neko od obaveza ne može više od 2x, neko može 5x nedeljno da izdvoji
          vreme za trening.
        </p>
        <p>
          Tu sam da Vam prenesem iskustvo da spoznate sebe onako kako još sami
          sebe niste upoznali(kad su forma i zdrave životne navike u pitanju).
        </p>
        <p>Zakažite online trening:</p>
        <ul>
          <li>
            <span>
              <b>Pozovite broj telefona </b>
            </span>
            <a className="link-blue" href="tel:060-073-7363">
              +381 600737363
            </a>
            <br />
          </li>
          ili
          <li>
            <b>Popunite polja ispod i pošaljite</b>
          </li>
        </ul>

        <form className="form-online-training" onSubmit={sendEmail}>
          <label>Ime i Prezime</label>
          <span className="star"> *</span>
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
            defaultValue="Online trening"
            required
          />
          <div className="change">
            podatak iz ovog polja se ne može promeniti
          </div>
          <br />
          <IconButton style={{ padding: "0" }}>
            <Submit>Zakaži trening</Submit>
          </IconButton>
        </form>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          TransitionComponent={Slide}
          open={open}
          autoHideDuration={2000}
          message="Uspešno ste zakazali online trening. Hvala!"
          action={
            <IconButton onClick={closeAlertMessage}>
              <i style={{ color: "#fff" }} className="uil uil-times"></i>
            </IconButton>
          }
        />
      </div>
    </Container>
  );
}

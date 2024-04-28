import React from "react";
import { Container, Submit, Title } from "../../../global";
import "./onlineTraining.css";
import onlineImage from "../../images/online-trening-Big.jpg";
import { Helmet } from "react-helmet";
import "../../../global";

export default function OnlineTraining() {

  return <Container>
      <Helmet>
        <title>Online trening | Mihailo Zivanovic</title>
        <meta name="description" content="Online trening jeste sve ono što bi bilo u praksi 1 na 1, samo je online, kroz vođenje i praćenje procesa sve vreme.
          Online trening podrazumeva međusobnu interakciju između trenera i klijenta, a to se se odnosi na:" />
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
            klipovima, ako je potrebno vezano za samo izvođenje pojedinih
            vežbi, kao i tehnike istih)
          </li>
          <li>vizuelno praćenje kroz slike </li>
          <li>
            plan ishrane i smernice oko unosa vitamina i suplemenata(GRATIS)
            <span className="star"> *</span>
          </li>
          <li>motivaciju i istrajnost da klijenti uspeju u zadatom cilju</li>
        </ul>
        <p>
          Za nekoga ko nije u mogućnosti da bude sa trenerom, jer živi u
          drugom gradu ili državi, ovo je idealan način za ostvarivanje
          uspeha.
        </p>
        <p>
          Takođe benefit online treninga je finansijski deo, jer je
          prilagođeniji za osobe koje ne mogu da priušte trenera da "izvlači"
          iz njih potencijal uživo.
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
      </div>
    </Container>;
}

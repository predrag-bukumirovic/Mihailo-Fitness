import React from "react";
import { Container, Submit, Title } from "../../../global";
import "./dietPlan.css";
import dietPlanBigImg from "../../images/plan-ishrane.jpeg";
import { Helmet } from "react-helmet";

export default function DietPlan() {

  return <Container>
      <Helmet>
        <title>Plan ishrane | Mihailo Zivanovic</title>
        <meta name="description" content="Šta je to plan ishrane?
          Kratak i jasan odgovor je - primarna ljudska potreba za hranom, tečnošću, da preživi. 
          Svi smo individue i nemamo svi iste potrebe vezano za unos hrane.
          Neko je anemičan, neko je gojazan, neko ima neki od zdravstvenih problema(IR- insulinska rezistencija, hiper/hipo- tireoidna-štitasta žlezda-Bazedovljev autoimuni sindrom, hashimoto sindrom, intolerancija na određenu hranu)." />
      </Helmet>
      <Title style={{ marginTop: "30px" }}>Plan ishrane</Title>

      <div className="dietPlan-image">
        <img src={dietPlanBigImg} alt="Plan ishrane slika" />
      </div>
      <div className="text">
        <h3>Šta je to plan ishrane?</h3>
        <p>
          Kratak i jasan odgovor je - primarna ljudska potreba za hranom,
          tečnošću, da preživi.
        </p>
        <p>
          Svi smo individue i nemamo svi iste potrebe vezano za unos hrane.
        </p>
        <p>
          Neko je anemičan, neko je gojazan, neko ima neki od zdravstvenih
          problema(IR- insulinska rezistencija, hiper/hipo- tireoidna-štitasta
          žlezda-Bazedovljev autoimuni sindrom, hashimoto sindrom,
          intolerancija na određenu hranu).{" "}
        </p>
        <p>
          Sve od navedenih, kao i još dosta drugih nelagodnosti, problema
          vezano za apetit, bezvoljnost i zdravstveno stanje, bukvalno sve je
          posledica neredovnih i loše izbalansiranih kalorija. (Odnos, masti,
          hidrata, vitamina i suplemenata).
        </p>
        <p>
          Kada znamo šta ne valja da unosimo, već smo na dobrom putu ka
          delimično ostvarivanju svog cilja, ali još kad znamo da i od
          prekomernog unosa zdravih namirnica možete da napravite možda i
          gorih zdravstvenih problema, onda već alarm mora da se ukljući na
          vreme. Zato uvek potenciram izreku "bolje sprečiti nego lečiti", ili
          u radu sa klijentima "bolje ulagati na vreme u svoje zdravlje,
          zdrave životne navike, aktivnosti, izbalansiranu ishranu, nego u
          kasnijoj životnoj dobi na lekove". SVE JE NA VAMA. VI STE SAMI SEBI
          SVOJ HRAM, PA TAKO GA POŠTUJTE I UNOSITE U SEBE SAMO NAJBOLJE. VI
          BIRATE KAKO ĆETE ŽIVETI I NA KOJI NAČIN, I KAKO ĆETE SE HRANITI.
        </p>
        <p>
          Ja sam tu na raspolaganju da Vam pomognem i unapredim život koliko
          je to moguće.
        </p>

        <ul>
          <li>pripremu jelovnika shodno cilju klijenta</li>
          <li>odnos proteina/masti/hidrata </li>
          <li>unos tečnosti vitamina i suplementacija</li>
          <li>interakciju kad god klijent poželi da se obrati</li>
          <li>praćenje procesa kroz mesec dana</li>
        </ul>
        <p>
          *Cena paketa plana ishrane je <b>6000 rsd</b> mesečno
        </p>
        <p>
          *Ako klijent zeli da nastavi saradnju i u narednom mesecu, cena je takođe <b>6000 rsd</b>
        </p>
        <p>Zakažite plan ishrane:</p>
        <ul>
          <li style={{ marginBottom: 50 }}>
            <span>
              <b>Pozovite broj telefona </b>
            </span>
            <a className="link-blue" href="tel:060-073-7363">
              +381 600737363
            </a>
            <br />
          </li>
          <a href="/kontakt">
            <Submit>Stupi u kontakt sa trenerom</Submit>
          </a>
        </ul>
      </div>
    </Container>;
}

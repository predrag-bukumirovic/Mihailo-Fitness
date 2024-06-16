import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Container, Title } from "../../global";
import "./testimonial.css";

export default function Testimonial() {
  return <Container>
      <Title style={{ marginBottom: 30 }}>Zadovoljni klijenti</Title>

      <Carousel autoPlay={true} infiniteLoop emulateTouch showStatus={false} showThumbs={false} interval={10000}>
        <div className="container-testimonial">
          <div className="person-img person1" />
          <h3>Slavica Srejić</h3>
          <p>
            <q>
              Dragi posetioci ove stranice, pre svega da vam kažem da nisam
              upoznala posvećenijeg trenera, što je nešto najbitnije kada se
              odlučite da unajmite profesionalnog trenera..Trener, kao što je
              Mihailo je jako kompetetan, trening kod istog svrsishodan i
              pruža primenljivo znanje. Sa njim sam naučila nešto novo, dobila
              odgovore na mnoga pitanja i sa sigurnošću govorim da će mi
              znanje stečeno na treningu pomoći za moj dalji napredak. I da,
              takodje želim da i dalje treniram. Naravno, sa Mihailom jer
              njegova organizacija i atmosfera koju on stvara su idealno
              dobri.
            </q>
          </p>
        </div>
        <div className="container-testimonial">
          <div className="person-img person2" />
          <h3>Tea Brujić</h3>
          <p>
            <q>
              Nadam se da ćes ovo pročitati ako si posetio ovu stranicu. Prvo,
              stručnost neću ni da komentarišem jer mislim da su ostali rekli
              i više nego dovoljno o tome, samo ću reći - svaka čast. Drugo,
              treniram sa njim već skoro 3 godine i mislim da u životu nisam
              dobila takvu antistres terapiju kakvu ova osobica pruža. Toliko
              smeha, zabave i priče, ispraćene radom na sebi mislim da ni
              jedna terapija ne može da pruži. Radiš na svom zdravlju u svakom
              smislu te reči - i psihički i fizički. Tako da neću puno da
              dužim, najiskrenija pohvala i preporuka.
            </q>
          </p>
        </div>
        <div className="container-testimonial">
          <div className="person-img person3" />
          <h3>Kristijan Cesnak</h3>
          <p>
            <q>
              Počeo sam sa treninzima kako bih ojačao mišiće, pre svega leđne
              zbog dugog sedenja na poslu. Mihailo je veoma posvećen
              treninzima, prilikom pokazivanja pravilnog izvođenja vežbi,
              asistencija, davanja saveta oko ishrane...veoma je fleksibilan i
              otvoren za sve dogovore. Veoma sam zadovoljan rezultatima. Svima
              preporučujem saradnju sa njim.
            </q>
          </p>
        </div>
        <div className="container-testimonial">
          <div className="person-img person4" />
          <h3>Tanja Gligorić</h3>
          <p>
            <q>
              Kada sam se odlučila za Mihaila kao trenera to je bilo zbog toga
              što je stručan u svom poslu i što sam u njemu videla trenera
              koji veruje u mene i moje mogućnosti. Mihailo ima izuzetno ličan
              pristup u formiranju treninga, izboru tempa rada i dinamici
              svakog pojedinačnog časa. Svaki trening je drugačiji i podređen
              cilju koji smo postavili na početku saradnje, ali i prilagođen
              trenutnom stanju tela i raspoloženju. Mihailovo znanje,
              posvećenost, autoritet i sposobnost da motiviše u trenucima kad
              je to najpotrebnije, učinili su da danas mogu da budem
              zadovoljna postignutim rezultatima, i da sa entuzijazmom
              nastavim da vežbam i radim na sebi.
            </q>
          </p>
        </div>
        <div className="container-testimonial">
          <div className="person-img person5" />
          <h3>Miroslav Sapundžić</h3>
          <p>
            <q>
              Počeci u svetu fitnessa uz saradnju sa Mihailom pokazali su se
              kao odličan izbor i dragoceno iskustvo. Njegovi individualni,
              kao i grupni treninzi, su uvek sa pravom merom dobro
              isplaniranog i efikasnog rada i neformalnog druženja i zabave.
              Mihailova stručnost, profesionalna pasija, maksimalna
              posvećenost klijentu i dobra energija zaslužni su za vrlo brzo
              vidljive rezultate, podizanje samopouzdanja i doživljaj treninga
              kao potrebe, ujedno i zadovoljstva. Svako ko se upusti u ovu
              avanturu može da dobije bar dve stvari, dobre i zdrave navike i
              novog prijatelja, obe neprocenjive. Miroslav Sapundžić,
              istoričar umetnosti
            </q>
          </p>
        </div>
        <div className="container-testimonial">
          <div className="person-img person6" />
          <h3>Nikola Ajzenhamer</h3>
          <p>
            <q>
              Kao početniku veoma mi je bilo važno da imam trenera koji će sa
              jedne strane prilagoditi trening mojim mogućnostima, a sa druge
              strane pružiti dosta znanja. Mihailo je upravo takav trener. Već
              od prvog treninga sam naučio dosta toga o vežbanju, ishrani i
              drugim dobrim navikama koje će iz mene izvući maksimum. Mihaila
              preporučujem svakome ko nije siguran kako da počne jer će
              sigurno steći samopouzdanje u izvođenju vežbi ispravnim
              tehnikama i naučiće mnogo toga.
            </q>
          </p>
        </div>
      </Carousel>
    </Container>;
}

import * as React from "react";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";
import "./contact.css";
import { Submit, Title } from "../../global";
import { Snackbar, Slide, IconButton } from "@material-ui/core";

function Contact() {
  const [open, setOpen] = React.useState(false);

  //Send email start
  function sendEmail(event) {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_wmtdkul",
        "template_b8rdk0b",
        event.target,
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
    event.target.reset();
  } //Send email end

  const closeAlertMessage = () => {
    setOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Kontakt | Mihailo Zivanovic</title>
      </Helmet>

      <div className="container-form">
        <Title>Kontakt</Title>

        <div className="contact-map">
          <form onSubmit={sendEmail}>
            <label htmlFor="fullName">Ime i Prezime</label>
            <span className="star"> *</span>
            <input
              type="text"
              name="fullName"
              placeholder="Vaše ime i prezime..."
              required
            />
            <div className="label-box">
              <label htmlFor="email">Email</label> <span className="star"> *</span>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Vaša email adresa..."
              required
            />

            <div className="label-box">
              <lebel htmlFor="message">Poruka</lebel>
              <span className="star"> *</span>
            </div>
            <textarea name="message" placeholder="Vaša poruka..." required />
            <IconButton style={{ padding: 0, marginTop: 30 }}>
              <Submit title="Pošalji poruku i stupi u kontakt sa trenerom">
                Pošalji poruku
              </Submit>
            </IconButton>
          </form>
        </div>

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          TransitionComponent={Slide}
          open={open}
          autoHideDuration={2000}
          message="Poruka je uspešno poslata. Hvala!"
          action={
            <IconButton onClick={closeAlertMessage}>
              <i style={{ color: "#fff" }} class="uil uil-times"></i>
            </IconButton>
          }
        />
      </div>
      <iframe
        title="Lokacija gde se treninzi odrzavaju"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176.89135209689906!2d20.512929207340232!3d44.8162343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7af351097a59%3A0x6469d9b04e43748b!2sNon%20Stop%20Fitness%20Serbia!5e0!3m2!1sen!2srs!4v1627217827693!5m2!1sen!2srs"
        allowFullScreen=""
        loading="lazy"
      />
    </>
  );
}

export default Contact;

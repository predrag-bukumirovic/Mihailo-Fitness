import * as React from "react";
import { Helmet } from "react-helmet";
import "./contact.css";
import { Submit, Title } from "../../global";
import { Snackbar, Slide, IconButton } from "@material-ui/core";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [services, setServices] = useState("");
  const [message, setMessage] = useState("");

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);  

  const submitForm = async e => {
    e.preventDefault();

    const emailTemplate = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              color: #333333;
            }

            * {
              box-sizing: border-box;
            }

            .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f5f5f5;
            }

            p {
              font-size: 16px;
              margin: 0 0 10px;
            }

            a {
              color: #0066cc;
              text-decoration: underline;
            }

    
            .section {
              margin-bottom: 40px;
            }

            .section-heading {
              font-size: 20px;
              font-weight: bold;
              margin: 0 0 10px;
            }

            .section-content {
              font-size: 16px;
              margin: 0;
            }

            /* Stilovi za dugme */
            .button {
              display: inline-block;
              padding: 10px 20px;
              background-color: #0066cc;
              color: #ffffff;
              text-decoration: none;
              border-radius: 5px;
            }

            .button:hover {
              background-color: #004f9f;
            }

            .header {
              background-color: #ffffff;
              padding: 20px;
              text-align: center;
            }

            .footer {
              background-color: #f5f5f5;
              padding: 20px;
              text-align: center;
            }

            .logo {
              width: 100%;
              margin: 0 auto;
            }

            @media only screen and (max-width: 600px) {
              .container {
                padding: 10px;
              }
            }

            .message-box {
              padding: 30px;
            }

            .policy {
              color: #ffa500 !important;
            }
          </style>
        </head>

        <body>
          <div class="container">
            <div class="header">
              <img src='https://www.mihailo-fitness.rs/static/media/logo2.3c8d5fa4.png' alt="Logo" class="logo">
            </div>
            <div class="section">
              <b>Name:</b> <p>${name}</p>
              <b>Email:</b> <p>${email}</p>
              <b>Position:</b> <p>${services}</p>
              <p class="message-box"><b><Message:></b> ${message}</p>
            </div>
            <div class="footer">
              <p>© Mihailo Živanović | Sva prava zadržana.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    try {
      await fetch("/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: emailTemplate
        })
      });

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(true);
        document.getElementById("form").reset();
      }, 3000);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

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
          <form onSubmit={submitForm}>
            <label htmlFor="fullName">Ime i Prezime</label>
            <span className="star"> *</span>
            <input
              onChange={event => setName(event.target.value)}
              type="text"
              name="name"
              placeholder="Vaše ime i prezime..."
              required
            />
            <div className="label-box">
              <label htmlFor="email">Email</label> <span className="star"> *</span>
            </div>
            <input
              onChange={event => setEmail(event.target.value)}
              type="email"
              name="email"
              placeholder="Vaša email adresa..."
              required
            />

            <div className="label-box">
              <label htmlFor="email">Usluga <span className="star"> *</span></label>
            </div>
            <select onChange={event => setServices(event.target.value)} required>
              <option value="">Izaberite uslugu:</option>
              <option value="Uživo trening">Uživo trening</option>
              <option value="Online trening">Online trening</option>
              <option value="Plan ishrane">Plan ishrane</option>
            </select>

            <div className="label-box">
              <lebel htmlFor="message">Poruka</lebel>
              <span className="star"> *</span>
            </div>
            <textarea onChange={event => setMessage(event.target.value)} name="message" placeholder="Vaša poruka..." required />
            <IconButton style={{ padding: 0, marginTop: 30 }}>
              <Submit disabled={loading} title="Pošalji poruku i stupi u kontakt sa trenerom">
                {loading ? "Slanje... " : "Pošalji "}
                {loading &&
                  <div class="lds-ring">
                    <div />
                    <div />
                    <div />
                    <div />
                  </div>}
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

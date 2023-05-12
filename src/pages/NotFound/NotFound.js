import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "../../global";
import "../../global.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <Helmet>
        <title>NotFound Error 404</title>
      </Helmet>
      <div className="notfound-text">
        <h4>404</h4>
        <h5>oops! Stranica nije pronađena</h5>
        <p>
          Stranica koju tražite ne postoji. Možda je premeštena ili izbrisana.
        </p>
        <Button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Vrati se na početnu
        </Button>
      </div>
    </div>
  );
}

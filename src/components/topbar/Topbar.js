import React from "react";
import "./topbar.css";
import logo from "../images/logo2.png";
import scrollTopPage from "../../global";

function Topbar({ menuOpen, setMenuOpen }) {
  const bodyScroll = () => {
    let bodyHidden = document.body;

    if (setMenuOpen(true)) {
      bodyHidden.classList.remove("no-scroll");
    } else {
      bodyHidden.classList.add("no-scroll");
    }
  };

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="topbar-box">
        <a onClick={scrollTopPage} href="/">
          <img className="logo" src={logo} alt="Logo" />
        </a>
        <div className="menu-mode">
          <div onClick={() => setMenuOpen(!menuOpen)}>
            <div onClick={bodyScroll} className="burger-menu">
              <div className="line"></div>
              <div className="line-medium"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;

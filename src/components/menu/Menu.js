import React from "react";
import "./menu.css";
import scrollTopPage from "../../global";
import { MenuNav } from "../../global";

function Menu({ menuOpen, setMenuOpen }) {
  //Removing the scroll when wedged on a menu or window background
  const closeBodyScroll = () => {
    let bodyHidden = document.body;

    if (!setMenuOpen(false)) {
      bodyHidden.classList.remove("no-scroll");
    } else {
      bodyHidden.classList.remove("no-scroll");
    }
  };

  // Adding a scroll when pressing escape and we remove the menu
  const closeAllMenuOnEsc = (e) => {
    let bodyHidden = document.body;
    e = e || window.event;

    if (e.kay === "Escape" || e.keyCode === 27) {
      bodyHidden.classList.remove("no-scroll");
    }
  };

  window.addEventListener("keydown", closeAllMenuOnEsc);

  return <div onClick={closeBodyScroll}>
      <div onClick={() => setMenuOpen(!menuOpen)} className={"menu-background " + (menuOpen && " active")}>
        <MenuNav className={"menu " + (menuOpen && "active")}>
          <div className="logo-close-menu">
            <i className="uil uil-multiply" style={{ fontSize: "35px", cursor: "pointer", marginRight: "10px" }} onClick={() => setMenuOpen(!menuOpen)} />
          </div>
          <ul className="menu-link">
            <a onClick={scrollTopPage} href="/">
              <li onClick={() => setMenuOpen(!menuOpen)}>Početna</li>
            </a>
            <a onClick={scrollTopPage} href="/biografija/">
              <li onClick={() => setMenuOpen(!menuOpen)}>Biografija</li>
            </a>
            <a onClick={scrollTopPage} href="/trening-uzivo/">
              <li onClick={() => setMenuOpen(!menuOpen)}>Uživo trening</li>
            </a>
            <a onClick={scrollTopPage} href="/online-trening/">
              <li onClick={() => setMenuOpen(!menuOpen)}>Online trening</li>
            </a>
            <a onClick={scrollTopPage} href="/plan-ishrane/">
              <li onClick={() => setMenuOpen(!menuOpen)}>Plan ishrane</li>
            </a>
            <a onClick={scrollTopPage} href="/kontakt/">
              <li onClick={() => setMenuOpen(!menuOpen)}>Kontakt</li>
            </a>
          </ul>

          <div className="network">
         

            <a href="https://www.instagram.com/mihailo_zivanovic/">
              Instagram
            </a> <br/>
            
            <a href="tel:+381600737363">Pozovi me</a>

          </div>
        </MenuNav>
      </div>
    </div>;
}

export default Menu;

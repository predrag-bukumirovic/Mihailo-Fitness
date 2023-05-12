import React, { Component } from "react";
import "./scrollToTop.css";
import ScrollTopIcon from "../images/arrow.png";

class GoTop extends Component {
  state = {
    thePosition: false,
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        this.setState({ thePosition: true });
      } else {
        this.setState({ thePosition: false });
      }
    });
  }

  renderGoTopIcon = () => {
    if (this.state.thePosition) {
      return (
        <>
          <a href="#top">
            <span className="go-up" onClick={this.scrollToTop}>
              <img src={ScrollTopIcon} alt="Scroll slika" />
            </span>
          </a>
        </>
      );
    }
  };

  render() {
    return <>{this.renderGoTopIcon()}</>;
  }
}

export default GoTop;

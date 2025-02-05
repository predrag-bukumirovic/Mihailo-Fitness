import React, { Component } from "react";
import "./scrollToTop.css";


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
              Gore
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

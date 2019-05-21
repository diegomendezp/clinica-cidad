import React from "react";
import { CookieWrapper } from "./CookiesStyles";
import { PStyle } from "../../PagesStyles/TextStyles/PStyle";


class Cookies extends React.Component {
  constructor({ backgroundColor, color }) {
    super({ backgroundColor, color });
    this.state = { display: "flex" };
  }

  componentDidMount() {
    const display = localStorage.getItem("displayCidad")
    this.setState({... this.state , display})
  }
  changeDisplay = () => {
    localStorage.setItem("displayCidad", 'none')
    const display = localStorage.getItem("displayCidad")
    this.setState({... this.state , display})
  };
  render() {
    const { backgroundColor, color } = this.props;
    return (
      <CookieWrapper
        backgroundColor={backgroundColor}
        color={color}
        display={this.state.display}
      >
        <img src="../../static/imgs/home/logoMenu.jpg" alt="app-logo" className="logo" />
        <div className="cookies-content">
          <PStyle>
            Este sitio web utiliza cookies para garantizar que obtenga la mejor
            experiencia en nuestro sitio web.{" "}
            <a href="https://cookies.insites.com/" target="_blank">
              Leer más
            </a>
          </PStyle>
          <button onClick={() => this.changeDisplay()}>ENTENDIDO</button>
        </div>
      </CookieWrapper>
    );
  }
}

export default Cookies;

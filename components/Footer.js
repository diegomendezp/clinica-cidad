import React from "react";
import { FooterStyle } from "../PagesStyles/FooterStyle";
import { FooterTextStyle } from "../PagesStyles/TextStyles/FooterTextStyle";
import logo from "../static/imgs/home/logoAzul.jpg";
import { FooterLink } from "../PagesStyles/TextStyles/FooterLinkStyles";
import Link from "next/link";

const Footer = props => {
  return (
    <FooterStyle>
      <div className="footerSection">
        <img className="logo" src={logo} />
      </div>
      <div className="footerSection">
        <FooterTextStyle margin black>
          Clínica Cidad
        </FooterTextStyle>
        <FooterTextStyle>
          <a
            href="https://goo.gl/maps/4n5D8sUit7jNDYbY8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Calle Alcalá 590 1A
          </a>
        </FooterTextStyle>
        <FooterTextStyle margin>
          <a href={`tel:${"917423141"}`}>917 42 31 41</a>
        </FooterTextStyle>
        <FooterTextStyle>
          <a
            href="https://goo.gl/maps/ni44kW5qsULYRnJZ7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Calle Machupichu 65
          </a>
        </FooterTextStyle>
        <FooterTextStyle margin>
          <a href={`tel:${"910660526"}`}>910 66 05 26</a>
        </FooterTextStyle>
      </div>
      <div className="footerSection">
        <Link href="/tratamientos">
          <FooterLink margin black>
            Tratamientos
          </FooterLink>
        </Link>
        <Link href="/equipo">
          <FooterLink margin black>
            Equipo
          </FooterLink>
        </Link>
        <Link href="/blog">
          <FooterLink margin black>
            Blog
          </FooterLink>
        </Link>
      </div>
    </FooterStyle>
  );
};

export default Footer;

import React from 'react'
import { FooterStyle } from '../PagesStyles/FooterStyle'
import { FooterTextStyle } from '../PagesStyles/TextStyles/FooterTextStyle'
import logo from '../static/imgs/home/logoAzul.jpg'

const Footer = props => {
    return (
        <FooterStyle>
            <div className="footerSection">
                <img className="logo" src={logo} />
            </div>
            <div className="footerSection">
                <FooterTextStyle>Clínica Cidad</FooterTextStyle>
                <FooterTextStyle>Calle Alcalá 590 1A 91 000 00 00</FooterTextStyle>
                <FooterTextStyle>Calle Machupichu 25 91 000 00 00</FooterTextStyle>
            </div>
            <div className="footerSection">
                <FooterTextStyle>Tratamientos</FooterTextStyle>
                <FooterTextStyle>Equipo</FooterTextStyle>
                <FooterTextStyle>Blog</FooterTextStyle>
            </div>
        </FooterStyle>
    )
}
              
export default Footer
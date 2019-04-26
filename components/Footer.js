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
                <FooterTextStyle margin={true} black={true}>Clínica Cidad</FooterTextStyle>
                <FooterTextStyle>Calle Alcalá 590 1A</FooterTextStyle>
                <FooterTextStyle margin={true}>91 000 00 00</FooterTextStyle>
                <FooterTextStyle>Calle Machupichu 25</FooterTextStyle>
                <FooterTextStyle margin={true}>91 000 00 00</FooterTextStyle>
            </div>
            <div className="footerSection">
                <FooterTextStyle margin={true} black={true}>Tratamientos</FooterTextStyle>
                <FooterTextStyle margin={true} black={true}>Equipo</FooterTextStyle>
                <FooterTextStyle margin={true} black={true}>Blog</FooterTextStyle>
            </div>
        </FooterStyle>
    )
}
              
export default Footer
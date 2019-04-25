import React from 'react'
import posed from 'react-pose';
import { NavWrapperStyle } from '../PagesStyles/NavBarStyle'
import { NavTextStyle } from '../PagesStyles/TextStyles/NavTextStyle'
import { NavLinkStyle } from '../PagesStyles/TextStyles/NavLinkStyle'
import logo from '../static/imgs/home/logoMenu.jpg'
import tailorLogo from '../static/imgs/tailorBlackLogo.svg'
import Link from 'next/link';

const Box = posed.div({
    up: {
        y: ({ y }) => (y),
        transition: {
            duration: 400,
            ease: 'linear'
        }
    },
    down: {
        y: ({ y2 }) => (y2),
        transition: {
            duration: 400,
            ease: 'linear'
        }
    }
})


class NavBar extends React.Component {

    constructor() {
        super()
        this.state = {
            hamburger: undefined,
            position: true,
            pos: true,
            menuSizes: {y: -1000, y2: 0},
            visible: false
        }
    }

    _manageResize = () => {
        
        switch (true) {
        case window.innerWidth < 376:
            return { y: -window.innerHeight * 1.20, y2: 95 }
        case window.innerWidth < 415:
            return { y: -window.innerHeight * 1.20, y2: 140 }
        case window.innerWidth < 769:
            return { y: -window.innerHeight * 1.20, y2: 0 }
        case window.innerWidth >= 769:
            return {y: -window.innerHeight * 1.20, y2: -60}
        }
    };

    componentDidMount() {
        this.setState({ hamburger: document.getElementsByClassName("hamburger")[0], menuSizes: this._manageResize() })
    }

    hamburgerEffect = () => {

        let el = this.state.hamburger
        if (el.classList) {
            el.classList.toggle('is-active');
        } else {
            var classes = el.className.split(' ');
            var existingIndex = classes.indexOf('is-active');

            if (existingIndex >= 0)
                classes.splice(existingIndex, 1);
            else
                classes.push('is-active');

            el.className = classes.join(' ');
        }

        if (this.state.visible) {
            setTimeout(() => {
                this.setState({visible: !this.state.visible})
            }, 400)
        } else {
            this.setState({visible: !this.state.visible})
        }
    }

    _managePositionNav = () => {
        if (this.state.pos) {
            this.setState({ position: !this.state.position, pos: !this.state.pos }, () => this.hamburgerEffect()) 
        } else {
            this.setState({ position: !this.state.position }, () => {
            this.hamburgerEffect()
            setTimeout(()=> {
                this.setState({pos: !this.state.pos})
            },400)
            })
        }
     
    }


    render() {



        return (
            <NavWrapperStyle position={this.state.pos} visible={this.state.visible}>
                <div className="menuIcon">
                    <link href="/static/css/hamburger.css" rel="stylesheet" />
                    <button className="hamburger hamburger--spin" type="button" onClick={() => this._managePositionNav()}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <Box pose={this.state.position ? "up" : "down"} className="menu" y={this.state.menuSizes !== undefined && this.state.menuSizes.y} y2={this.state.menuSizes !== undefined && this.state.menuSizes.y2}>
                    <div className="menuSection">
                    <div className="logoSection">
                                <Link href="/">
                                    <img className="logo" src={logo} />
                                </Link>
                        </div>
                        <div className="infoNavSection">
                        <div className="leftSection">                        
                            <div className="subMenuSection">                    
                                <NavTextStyle>Citas: 917 423 141 </NavTextStyle>
                                <NavTextStyle margin={true}>Calle Alcalá 590 1A</NavTextStyle>
                                <NavTextStyle>Citas: 91 000 000 </NavTextStyle>
                                <NavTextStyle margin={true}>Calle Machupichu 25</NavTextStyle>
                                <NavTextStyle>info@clinicacidad.es</NavTextStyle>
                            </div>
                        </div>
                        <div className="rightSection">
                            <div className="subMenuSection2">
                                <Link href="/clinicas">
                                    <NavLinkStyle title={true} margin={true}>Clínicas</NavLinkStyle>
                                </Link>
                                <Link href="/tratamientos">
                                    <NavLinkStyle title={true}>Tratamientos</NavLinkStyle>
                                </Link>
                                <NavLinkStyle top={true}>- Medicina estética</NavLinkStyle>
                                <NavLinkStyle margin={true}>- Ortodoncia y odeontología</NavLinkStyle>                  
                                <Link href="/equipo">
                                    <NavLinkStyle title={true} margin={true}>Equipo</NavLinkStyle>
                                </Link>
                                <Link href="/blog">                        
                                    <NavLinkStyle title={true} margin={true}>Blog</NavLinkStyle>
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="menuFooter">
                            <NavTextStyle>© 2019 by Tailor</NavTextStyle>
                            <img src={tailorLogo}/>
                    </div>
                </Box>
            </NavWrapperStyle>
        )
    }
}

export default NavBar
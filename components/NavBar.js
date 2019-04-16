import React from 'react'
import posed from 'react-pose';
import { NavWrapperStyle } from '../PagesStyles/NavBarStyle'
import { NavTextStyle } from '../PagesStyles/TextStyles/NavTextStyle'
import logo from '../static/imgs/home/logoMenu.jpg'

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
            menuSizes: {y: -1000, y2: 0} 
        }
    }

    _manageResize = () => {
        
        switch (true) {
        case window.innerWidth < 376:
            return { y: -window.innerHeight * 1.20, y2: 0 }
        case window.innerWidth < 415:
            return { y: -window.innerHeight * 1.20, y2: 0 }
        case window.innerWidth < 769:
            return { y: -window.innerHeight * 1.20, y2: 0 }
        default:
            return {y: -window.innerHeight, y2: 0}
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
            <NavWrapperStyle position={this.state.pos}>
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
                    <div className="subMenuSection">
                        <img className="logo" src={logo} />
                        <NavTextStyle margin={true}>Citas: 600 000 000 – 91 000 000 Calle Alcalá 590 1A </NavTextStyle>
                        <NavTextStyle margin={true}>Citas: 600 000 000 – 91 000 000 Calle Machupichu 25</NavTextStyle>
                        <NavTextStyle>info@clinicacidad.es</NavTextStyle>
                    </div>
                    <div className="subMenuSection">
                        <NavTextStyle>Clínicas</NavTextStyle>
                        <NavTextStyle>Tratamientos</NavTextStyle>
                        <NavTextStyle>- Medicina estética</NavTextStyle>
                        <NavTextStyle>- Ortodoncia</NavTextStyle>
                        <NavTextStyle>- Odeontología</NavTextStyle>
                        <NavTextStyle>Equipo</NavTextStyle>
                        <NavTextStyle>Blog</NavTextStyle>
                    </div>
                    </div>
                    <div className="menuFooter">
                        <NavTextStyle>© 2019 by Tailor</NavTextStyle>
                    </div>
                </Box>
            </NavWrapperStyle>
        )
    }
}

export default NavBar
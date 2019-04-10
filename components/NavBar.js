import React from 'react'
import { NavWrapperStyle } from '../PagesStyles/NavBarStyle'




class NavBar extends React.Component {

    constructor() {
        super()
        this.state = {
            hamburger: undefined
        }
    }

    componentDidMount() {
        this.setState({hamburger: document.getElementsByClassName("hamburger")[0]})
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


    render() {
 
        return (
            <NavWrapperStyle>
                <link href="/static/css/hamburger.css" rel="stylesheet" />
                <button className="hamburger hamburger--spin" type="button" onClick={this.hamburgerEffect}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </NavWrapperStyle>
        )
    }
}

export default NavBar
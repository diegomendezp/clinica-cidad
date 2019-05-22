import React, { Component } from 'react'
import { TratamientosWrapperStyle } from '../PagesStyles/TratamientosStyle'
import { tween, easing } from 'popmotion';
import { H2Style } from '../PagesStyles/TextStyles/H2Style'
import { ButtonHomeStyle } from '../PagesStyles/TextStyles/ButtonHomeStyle'
import image1 from '../static/imgs/home/imgHome2.jpg'
import image2 from '../static/imgs/home/imghome2.png'
import image3 from '../static/imgs/home/imgHome4.jpg'
import Link from 'next/link';



export default class Tratamientos extends Component {

    constructor() {
        super()
        this.state = {
            animation: false,
            animationDone: false,
            width: undefined
        }
    }

    componentDidMount() {
        this.setState({ width: window.innerWidth })
        this._manageResize()
    }

    _manageResize = () => {
        switch (true) {
            case window.innerWidth < 376:
                this._makeAnimation(-130, -130, 60, 70, 20, 20);
                break;
            case window.innerWidth < 415:
                this._makeAnimation(-150, -150, 70, 80, 20, 20);
                break;
            case window.innerWidth < 769:
                this._makeAnimation(-200, -150, 20, -100, 10, 10);
                break;
            default:
                this._makeAnimation(-34, -24, 330, 350, 0, 0);
        }
    };

    _makeAnimation = (posX1, posX2, posY1, posY2, rotate1, rotate2) => {

        tween({
            from: {
                transalteX: posX1, transalteY: posY1, rotate: rotate1
            },
            to: {
                transalteX: posX2, transalteY: posY2, rotate: rotate2
            },
            duration: 2800,
            ease: easing.easeInOut,
            flip: Infinity,
        }).start((v) => {
            if (document.getElementById('image2') !== null) {
                document.getElementById(
                    'image2'
                ).style.webkitTransform = `translate(${v.transalteX}px, ${v.transalteY}px) rotate(${v.rotate}deg)`;
            }
        })

    }

    _checkVisible = () => {
        if (this.state.animation && !this.animationDone) {
            console.log("hola")
            document.getElementById('image1').style.display = "block";
            this._makeAnimation()
        }
    }

    render() {

        return (

            <TratamientosWrapperStyle img={this.state.width !== undefined && this.state.width <= 414 ? image3 : image1}>

                <div className="tratamientosContainer">
                    <div className="imageContainer">
                        <img id="image2" className="downImage" src={image2}></img>
                    </div>
                    <div className="infoContainer">
                        <H2Style padding={true} tratamientos>Nuestros tratamientos</H2Style>
                        <Link href="/tratamientos">
                            <ButtonHomeStyle tratamientos mobile>Ver tratamientos</ButtonHomeStyle>
                        </Link>
                    </div>

                </div>
            </TratamientosWrapperStyle>

        )
    }
}

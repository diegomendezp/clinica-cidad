import React, { Component } from 'react'
import { TratamientosWrapperStyle } from '../PagesStyles/TratamientosStyle'
import ScrollPercentage from 'react-scroll-percentage'
import { tween, styler, easing } from 'popmotion';
import Div100vh from 'react-div-100vh'
import image1 from '../static/imgs/home/imgHome2.jpg'
import image2 from '../static/imgs/home/imghome2.png'


export default class Tratamientos extends Component {

    constructor(){
        super()
        this.state = {
            animation: false,
            animationDone: false
        }
    }

    componentDidMount() {
        this._makeAnimation()
    }

    _makeAnimation = () => {
    
        tween({
            from: {
              transalteX: -200, transalteY: 30, rotate: 50
            },
            to: {
              transalteX: -125, transalteY: 10, rotate: 10
            },
            duration: 2800,
            ease: easing.easeInOut,
          }).start((v) => {
            if (document.getElementById('image2') !== null) {
              document.getElementById(
                'image2'
              ).style.webkitTransform = `translate(${v.transalteX}px, ${v.transalteY}px) rotate(${v.rotate}deg)`;
            }
          })

        //   tween({
        //     from: {
        //       transalteX: -200, transalteY: 1000, rotate: 50
        //     },
        //     to: {
        //       transalteX: -30, transalteY: 410, rotate: 0
        //     },
        //     duration: 2800,
        //     ease: easing.easeInOut,
        //   }).start((v) => {
        //     if (document.getElementById('image2') !== null) {
        //       document.getElementById(
        //         'image2'
        //       ).style.webkitTransform = `translate(${v.transalteX}px, ${v.transalteY}px) rotate(${v.rotate}deg)`;
        //     }
        //   })

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
            <Div100vh style={{ height: "100rvh", zIndex: "-10" }}>
                <TratamientosWrapperStyle img={image1}>
                    <div className="tratamientosContainer">
                        {/* <ScrollPercentage onChange={(percentage, inView) => {
                            !inView ? this.setState({animation: inView, animationDone: true}) : this.setState({animation: inView}) 
                        }}> */}
                            <div className="imageContainer">
                                <img id="image2" className="downImage" src={image2}></img>
                            </div>
                        {/* </ScrollPercentage> */}
                    </div>
                </TratamientosWrapperStyle>
            </Div100vh>
        )
    }
}

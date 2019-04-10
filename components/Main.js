import React, { Component } from 'react'
import Div100vh from 'react-div-100vh'
import { MainWrapperStyle } from '../PagesStyles/MainStyle'
import { H1Style } from '../PagesStyles/TextStyles/H1Style'
import { PStyle } from '../PagesStyles/TextStyles/PStyle'
import imageOffice from '../static/imgs/home/imgHome1.jpg'

export default class Main extends Component {
  render() {
    return (
      <Div100vh style={{ height: '100rvh' }}>
        <MainWrapperStyle img={imageOffice} style={{ height: '100vh' }}>
          <Div100vh style={{ height: '100rvh' }} className="mainContainer">
            <div className="headerContainer">
              <H1Style>Clínica Cidad – medicina estética, ortodoncia, odeontología…</H1Style>
            </div>
            <div className="addressContainer">
              <PStyle>Calle Alcalá 590 1A –</PStyle>
              <PStyle> Calle Machupichu 25  |  Madrid</PStyle>
            </div>
          </Div100vh>
        </MainWrapperStyle>
      </Div100vh>
    )
  }
}

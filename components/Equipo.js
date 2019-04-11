import React from 'react'
import { EquipoStyle } from '../PagesStyles/EquipoStyle'
import image1 from '../static/imgs/home/imgHome3.jpg'
import { H2Style } from '../PagesStyles/TextStyles/H2Style'
import { ButtonHomeStyle } from '../PagesStyles/TextStyles/ButtonHomeStyle'

const Equipo = props => {
    return (
        <EquipoStyle img={image1}>
            <div className="equipoContainer">
                <div className="infoContainer">
                    <H2Style padding={true} equipo={true}>Nuestros equipo de exportos</H2Style>
                    <ButtonHomeStyle equipo={true}>Ver equipo</ButtonHomeStyle>
                </div>
            </div>

        </EquipoStyle>
    )
}

export default Equipo
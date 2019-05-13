import React from 'react'
import { EquipoStyle } from '../PagesStyles/EquipoStyle'
import image1 from '../static/imgs/home/imgHome3.jpg'
import { H2Style } from '../PagesStyles/TextStyles/H2Style'
import { ButtonHomeStyle } from '../PagesStyles/TextStyles/ButtonHomeStyle'
import Link from 'next/link';

const Equipo = props => {
    return (
        <EquipoStyle img={image1}>
            <div className="equipoContainer">
                <div className="infoContainer">
                    <H2Style padding={true} equipo={true}>Nuestros equipo de 
                    {"\n"}
                    expertos <Link href="/equipo">
                    <ButtonHomeStyle equipo={true} mobile={false} background={true}>Ver equipo</ButtonHomeStyle>
                    </Link></H2Style>
                    
                </div>
            </div>
        </EquipoStyle>
    )
}

export default Equipo
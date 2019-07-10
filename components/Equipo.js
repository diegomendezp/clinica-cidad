import React from 'react'
import { EquipoStyle } from '../PagesStyles/EquipoStyle'
import { H2Style } from '../PagesStyles/TextStyles/H2Style'
import { ButtonHomeStyle } from '../PagesStyles/TextStyles/ButtonHomeStyle'
import Link from 'next/link';

const Equipo = props => {
    return (
        <EquipoStyle img={"/static/imgs/home/imgHome3.jpg"}>
            <div className="equipoContainer">
                <div className="infoContainer">
                    <H2Style padding={true} equipo={true}>Nuestro equipo de 
                    {"\n"}
                    expertos 
                    </H2Style>
                    <Link href="/equipo">
                    <ButtonHomeStyle equipo mobile={false} background>Ver equipo</ButtonHomeStyle>
                    </Link>
                    
                </div>
            </div>
        </EquipoStyle>
    )
}

export default Equipo
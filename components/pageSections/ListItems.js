import React from 'react'
import {ListItemsWrapperStyle} from '../../PagesStyles/ListItemsStyle'

const ListItems = props => {
    return (
        <ListItemsWrapperStyle>
            <div>
                <div className="treatment-header">
                    <img src="/static/imgs/svg/Preventiva.svg" alt="odontologia-icon"/>
                    <h3>ODONTOLOGÍA PREVENTIVA</h3>
                </div>
                <p>– De caries</p>
                <p>– De enfermedad periodontal e Higiene</p>
                <div className="treatment-header">
                    <img src="/static/imgs/svg/Odontopediatría.svg" alt="odontopedriatia-icon"/>
                    <h3>ODONTOPEDIATRÍA</h3>
                </div>
                <div className="treatment-header">
                    <img src="/static/imgs/svg/Endodoncia.svg" alt="endodoncia-icon"/>
                    <h3>ENDODONCIA</h3>
                </div>
                <div className="treatment-header">
                    <img src="/static/imgs/svg/Implantología.svg" alt="implantologia-icon"/>
                    <h3>IMPLANTOLOGÍA</h3>
                </div>
            </div>               
            <div>
                <h3>PERIODONCIA</h3>
                <p>– Aparatología removible</p>
                <p>– Apartología fija"</p>
                <p>– Brackets Damon System ® (meátilocs / Estéticos)</p>
                <p>– Prótesis (Fija / Removible)</p>
                <p>– Ortodoncia invisible. Ivisaling®</p>
            </div> 
            <div>
                <h3>MAXILIFACIAL</h3>
                <h3>RADIODIAGNÓSTICO 3D</h3>
                <p>– Limpieza con aeropulidor</p>
            </div> 

        </ListItemsWrapperStyle>
    )
};

export { ListItems }
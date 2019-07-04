import React from 'react'
import {ListItemsWrapperStyle} from '../../PagesStyles/ListItemsStyle'

const ListItems = props => {
    return (
        <ListItemsWrapperStyle>
            <div className="treatments">
                <div className="treatments-container">
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
                <div className="treatments-container">
                    <div className="treatment-header">
                        <img src="/static/imgs/svg/Perodoncia.svg" alt="perodoncia-icon"/>
                        <h3>PERODONCIA</h3>
                    </div>
                    <p>– Aparatología removible</p>
                    <p>– Apartología fija"</p>
                    <p>– Brackets Damon System ® (meátilocs / Estéticos)</p>
                    <p>– Prótesis (Fija / Removible)</p>
                    <p>– Ortodoncia invisible. Invisalign®</p>
                </div> 
                <div className="treatments-container">
                    <div className="treatment-header">
                        <img src="/static/imgs/svg/Maxilofacial.svg" alt="maxilofacial-icon"/>
                        <h3>MAXILOFACIAL</h3>
                    </div>
                    <div className="treatment-header">
                        <img src="/static/imgs/svg/Radiodiagnostico.svg" alt="readiodiagnostico-icon"/>
                        <h3>RADIODIAGNÓSTICO 3D</h3>
                    </div>
                    <div className="treatment-header">
                        <img src="/static/imgs/svg/Novedades.svg" alt="novedades-icon"/>
                        <h3>NOVEDADES</h3>
                    </div>
                    <p>– Limpieza con aeropulidor</p>
                </div> 
            </div>

        </ListItemsWrapperStyle>
    )
};

export { ListItems }
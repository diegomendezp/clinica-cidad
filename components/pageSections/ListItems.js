import React from 'react'
import {ListItemsWrapperStyle} from '../../PagesStyles/ListItemsStyle'

const ListItems = props => {
    return (
        <ListItemsWrapperStyle>
            <div>
                <h3>ODONTOLOGÍA PREVENTIVA</h3>
                <p>– De caries</p>
                <p>– De enfermedad periodontal e Higiene</p>
                <h3>ODONTOPEDIATRÍA</h3>
                <h3>ENDODONCIA</h3>
                <h3>IMPLANTOLOGÍA</h3>
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
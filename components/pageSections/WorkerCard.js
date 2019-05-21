import React from 'react'
import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';

import { PStyle } from '../../PagesStyles/TextStyles/PStyle'

import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';

import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import arrow from '../../static/imgs/down.svg'

const ExpansionPanel = withStyles({
    root: {
      border: '1px solid white',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
    },
    expanded: {
      margin: 'auto',
    },
  })(MuiExpansionPanel);

const displayCurriculum = (curriculum) => (
  curriculum.map(element => (
    <li>- {element.name}</li>
  ))
)

const WorkerCard = props => {
    const { photo, name, descripcion, curriculum } = props.trabajador;

    return (
        <WorkerCardStyle>
            <div className="imageWorker">
                <img src={photo}></img>
            </div>
            <ExpansionPanel className="workerDescription">
                <ExpansionPanelSummary expandIcon={
                    <img src={arrow} className="arrow"/>
                }>
                    <p className="workerName">{name}</p>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <p className="workerDescription" align={true}>
                        {curriculum ? displayCurriculum(curriculum): descripcion}
                    </p>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </WorkerCardStyle>
    )
}

export default WorkerCard


const WorkerCardStyle = styled.div`

width: 50vw;

.workerName, .workerDescription {

margin: 0;
padding: 0;
font-family: "Avenir";
font-size: 2vw;
line-height: 3.3vh;
-webkit-letter-spacing: 0.6vw;
-moz-letter-spacing: 0.6vw;
-ms-letter-spacing: 0.6vw;
letter-spacing: 0.3vw;
text-align: left;
}

li {
  list-style: none;
}
.arrow {
    width: 3vw;
  }

.imageWorker {
  margin-top: 2%;
    img {
        width: 50vw;
        height: 60vh;
        object-fit: cover;
    }
}

@media (min-width: 1281px) {
  
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 414px) and (max-width: 767px) {
  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 413px) {

    width: 100vw;
    .arrow {
      width: 10vw;
    }

    .imageWorker {
    img {
        width: 100vw;
        height: 30vh;
        object-fit: cover;
    }
  }

  .workerName, .workerDescription {
      font-size: 5vw;
  }

}
`
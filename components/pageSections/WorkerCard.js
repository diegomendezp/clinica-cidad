import React from "react";
import styled from "styled-components";

import { withStyles } from "@material-ui/core/styles";

import { PStyle } from "../../PagesStyles/TextStyles/PStyle";

import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";

import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import arrow from "../../static/imgs/down.svg";

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid white",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    }
  },
  expanded: {
    margin: "auto"
  }
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    padding:0
  },
  
})(MuiExpansionPanelSummary);


const ExpansionPanelDetails= withStyles({
  root: {
    padding:0
  },
  
})(MuiExpansionPanelDetails);

const displayCurriculum = curriculum =>
  curriculum.map(element => <li>– {element.name}</li>);

const WorkerCard = props => {
  const { photo, name, descripcion, curriculum } = props.trabajador;

  return (
    <WorkerCardStyle>
      <div className="imageWorker">
        <img src={photo} />
      </div>
      {curriculum ? (
        <ExpansionPanel className="workerDescription">
          <ExpansionPanelSummary
            expandIcon={<img src={arrow} className="arrow" />}
          >
            <p className="workerName">{name}</p>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <p className="workerDescription" align={true}>
              {displayCurriculum(curriculum)}
            </p>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ) : (
        <div className="other-panel">
          <p className="workerName">{name}</p>
          <p className="workerDescription">{descripcion}</p>
        </div>
      )}
    </WorkerCardStyle>
  );
};

export default WorkerCard;

const WorkerCardStyle = styled.div`
  width: 30%;
  .workerName,
  .workerDescription {
    margin: 0;
    padding: 0;
    font-family: "Avenir";
    font-size: 2vw;
    line-height: 3.3vh;
    -webkit-letter-spacing: 0.2vw;
    -moz-letter-spacing: 0.2vw;
    -ms-letter-spacing: 0.2vw;
    letter-spacing: 0.1vw;
    text-align: left;
  }

  .other-panel {
    margin: 2% 0;
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
      width: 100%;
      height: 45vh;
      object-fit: cover;
    }
  }

  @media only screen and (min-width: 1441px) {
    .arrow {
      width: 2vw;
    }
    margin: 1% 0;
    .workerName {
      font-size: 2vw;
    }

    .workerDescription {
      font-size: 1.25vw;
    }
  }

  /* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    margin: 2.5% 0;
    .workerName {
      font-size: 2vw;
    }

    .workerDescription {
      font-size: 1.5vw;
    }
  }

  /* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

  /* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    margin: 2.5% 0;
    width: 45%;
    .workerName {
      font-size: 3.5vw;
    }

    .imageWorker {
      img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
      }
    }

    .workerDescription {
      font-size: 2.5vw;
    }
  }

  /* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    margin: 2.5% 0;
    width: 45%;
    .arrow {
      width: 4vw;
    }

    .imageWorker {
      img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
      }
    }

    .workerName {
      font-size: 3.5vw;
    }

    .workerDescription {
      font-size: 2.5vw;
    }
  }

  /* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

  @media only screen and (max-width: 414px) {
    margin: 2.5% 0;
    width: 100vw;
    .arrow {
      width: 8vw;
    }

    .imageWorker {
      img {
        width: 100vw;
        height: 30vh;
        object-fit: cover;
      }
    }

    .workerName {
      font-size: 5vw;
    }

    .workerDescription {
      font-size: 3.5vw;
    }
  }
`;

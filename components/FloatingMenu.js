import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Switch from '@material-ui/core/Switch';
import { capitalize } from '@material-ui/core/utils';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import MailIcon from '@material-ui/icons/Mail';
import MapIcon from '@material-ui/icons/Map';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/CameraAlt';
import FloatingMenuWrapper from '../PagesStyles/FloatingMenuStyles';
import { AST_ClassExpression } from 'terser';

const styles = theme => ({
  root: {
    width: 'auto',
    position: "fixed",
    // right: "100px",
    // top: "65%",
    // zIndex: 300000
  },
  controls: {
    margin: theme.spacing(3),
  },
  radioGroup: {
    margin: theme.spacing(1, 0),
  },
  speedDial: {
    position: 'absolute',
    '&$directionUp, &$directionLeft': {
      bottom: 0,
      right: 0,
    }
  },
  button: {
    background: 'black'
  },
  directionUp: {},
  directionRight: {},
  directionDown: {},
  directionLeft: {},
});

const actions = [
  { icon: <MailIcon />, name: 'Email' },
  { icon: <MapIcon />, name: 'Visitar' },
  { icon: <PhoneIcon />, name: 'Llamar' },
  { icon: <InstagramIcon />, name: 'Instagram' }
];

class FloatingMenu extends React.Component {
  state = {
    direction: 'up',
    open: false,
    hidden: false,
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleDirectionChange = (event, value) => {
    this.setState({
      direction: value,
    });
  };

  handleHiddenChange = (event, hidden) => {
    this.setState(state => ({
      hidden,
      // hidden implies !open
      open: hidden ? false : state.open,
    }));
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    const { direction, hidden, open } = this.state;

    const speedDialClassName = clsx(
      classes.speedDial,
      classes[`direction${direction}`],
    );

    return (
      <FloatingMenuWrapper>
        <div className={classes.root}>
            <SpeedDial
              ariaLabel="SpeedDial example"
              className={speedDialClassName}
              hidden={hidden}
              ButtonProps={{ color: "inherit" }}
              icon={<SpeedDialIcon />}
              onBlur={this.handleClose}
              onClick={this.handleClick}
              onClose={this.handleClose}
              onFocus={this.handleOpen}
              onMouseEnter={this.handleOpen}
              onMouseLeave={this.handleClose}
              open={open}
              direction={direction}
            >
              {actions.map(action => { 
                let enlace = action.name === "Email" ? `mailto:info@clinicacidad.es` : action.name === "Llamar" ? `tel:${"910660526"}` : action.name === 'Visitar' ? "https://g.page/CIDAD?share" : "https://www.instagram.com/clinicaa.cidad/"
                return (
                <SpeedDialAction
                  href={enlace}
                  target="_blank"
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={this.handleClick}
                />
              )
              }
              )}
            </SpeedDial>
          </div>
      </FloatingMenuWrapper>
    );
  }
}

FloatingMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingMenu);
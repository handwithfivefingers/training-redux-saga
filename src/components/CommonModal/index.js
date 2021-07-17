import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as modalActions from './../../actions/modal';
import style from './style';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
class CommonModal extends Component {
  render() {
    const { classes, modalActionCreator, component, title, open, path } = this.props;
    const { hideModal } = modalActionCreator;
    return (
      <Modal open={open} onClose={hideModal}>
        <Grid container className={classes.modal}>
          <Grid item md={12} className={classes.header}>
            <span className={classes.title}>{title}</span>
            <div>
              <HighlightOffIcon onClick={hideModal} className={classes.icon} />
            </div>
          </Grid>
          <Grid item md={12} className={classes.content}>
            {component}
          </Grid>
        </Grid>
      </Modal>
    );
  }
}
CommonModal.propTypes = {
  modalActionCreator: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func,
  }),
  title: PropTypes.string,
  component: PropTypes.object,
  classes: PropTypes.object,
  open: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  open: state.modal.showModal,
  title: state.modal.title,
  component: state.modal.component,
});
const mapDispatchToProps = (dispatch) => ({
  // modalActionCreator bên trái là biến props, modalActions bên phải là action
  modalActionCreator: bindActionCreators(modalActions, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(style), withConnect)(CommonModal);

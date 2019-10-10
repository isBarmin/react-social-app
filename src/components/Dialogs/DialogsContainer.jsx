import React from 'react';
import { connect } from 'react-redux';

import Dialogs from './Dialogs';
import {
  addMessageAC,
  changeNewMessageTextAC
} from '../../store/dialogs-reducer';

const mapStateToProps = state => ({
  dialogsPage: state.dialogs,
  newMessageText: state.dialogs.newMessageText
});

const mapDispatchToProps = dispatch => ({
  changeNewMessageText: text => dispatch(changeNewMessageTextAC(text)),
  addMessage: () => dispatch(addMessageAC())
});

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;

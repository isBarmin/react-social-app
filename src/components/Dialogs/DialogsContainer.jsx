import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import Dialogs from "./Dialogs";
import {
  addMessageAC,
  changeNewMessageTextAC
} from "../../store/dialogs-reducer";
import withAuthRedirect from "../../hocs/withAuthRedirect";

const mapStateToProps = state => ({
  dialogsPage: state.dialogs,
  newMessageText: state.dialogs.newMessageText
});

const mapDispatchToProps = dispatch => ({
  changeNewMessageText: text => dispatch(changeNewMessageTextAC(text)),
  addMessage: () => dispatch(addMessageAC())
});

export default compose(
  withAuthRedirect,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Dialogs);

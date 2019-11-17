import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import Dialogs from "./Dialogs";
import { addMessageAC } from "../../store/dialogs-reducer";
import withAuthRedirect from "../../hocs/withAuthRedirect";

const mapStateToProps = state => ({
  dialogsPage: state.dialogs
});

const mapDispatchToProps = {
  addMessage: addMessageAC
};

export default compose(
  withAuthRedirect,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Dialogs);

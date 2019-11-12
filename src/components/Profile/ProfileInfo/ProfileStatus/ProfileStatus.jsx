import React from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  activateEditMode = event => {
    this.setState({
      editMode: true
    });
  };

  deactivateEditMode = event => {
    this.setState({
      editMode: false
    });

    this.props.updateUserStatus(this.state.status);
  };

  handleChangeStatus = event => {
    this.setState({
      status: event.currentTarget.value
    });
  };

  render() {
    const { status } = this.state;

    return (
      <div className={s.profileStatus}>
        {this.state.editMode ? (
          <input
            onBlur={this.deactivateEditMode}
            autoFocus
            type="text"
            onChange={this.handleChangeStatus}
            value={status}
          />
        ) : (
          <p onDoubleClick={this.activateEditMode}>{status}</p>
        )}
      </div>
    );
  }
}

export default ProfileStatus;

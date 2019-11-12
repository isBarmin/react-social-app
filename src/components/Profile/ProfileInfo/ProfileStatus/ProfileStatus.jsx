import React from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  };

  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
  };

  render() {
    const { status } = this.props;

    return (
      <div className={s.profileStatus}>
        {this.state.editMode ? (
          <input
            onBlur={this.deactivateEditMode}
            autoFocus
            type="text"
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

import React from "react";

import s from "./Profile.module.css";
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = props => {
  const { profile, status, updateUserStatus } = props;

  if (!profile) return <Preloader />;

  return (
    <div className="userProfile">
      <div className="userProfile__side">
        <div className="userProfile__photo">
          <img src={profile.photos.large} alt={profile.fullName} />
        </div>
        <span className="userProfile-about">{profile.aboutMe}</span>
        <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
      </div>

      <div className="userProfile__body" />
    </div>
  );
};

export default ProfileInfo;

import React from "react";

import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = props => {
  const { posts, profile, status, updateUserStatus } = props;

  return (
    <div className={s.profile}>
      <h1>Profile</h1>

      <ProfileInfo
        profile={profile}
        status={status}
        updateUserStatus={updateUserStatus}
      />

      <MyPostsContainer posts={posts} />
    </div>
  );
};

export default Profile;

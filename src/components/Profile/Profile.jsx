import React from "react";

import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = props => {
  return (
    <div className={s.profile}>
      <h1>Profile</h1>

      <ProfileInfo profile={props.profile} />

      <MyPostsContainer posts={props.posts} />
    </div>
  );
};

export default Profile;

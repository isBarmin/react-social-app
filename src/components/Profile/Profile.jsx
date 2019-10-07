import React from 'react';

import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = props => {
  return (
    <div className={s.profile}>
      <h1>Profile</h1>

      {/* ProfileInfo */}

      <MyPosts posts={props.posts} />
    </div>
  );
};

export default Profile;

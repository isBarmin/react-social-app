import React from 'react';
import { connect } from 'react-redux';

import MyPosts from './MyPosts';

const mapStateToProps = state => ({
  posts: state.profile.posts
});

const MyPostsContainer = connect(mapStateToProps)(MyPosts);

export default MyPostsContainer;

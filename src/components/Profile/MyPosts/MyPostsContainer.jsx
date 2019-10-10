import React from 'react';
import { connect } from 'react-redux';

import { changeNewPostTextAC, addPostAC } from '../../../store/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = state => ({
  posts: state.profile.posts,
  newPostText: state.profile.newPostText
});

const mapDispatchToProps = dispatch => ({
  changeNewPostText: text => dispatch(changeNewPostTextAC(text)),
  addPost: () => dispatch(addPostAC())
});

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;

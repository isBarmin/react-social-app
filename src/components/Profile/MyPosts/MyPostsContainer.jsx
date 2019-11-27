import React from "react";
import { connect } from "react-redux";

import { addPostAC } from "../../../store/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = state => ({
  posts: state.profile.posts
});

const mapDispatchToProps = {
  addPost: addPostAC
};

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;

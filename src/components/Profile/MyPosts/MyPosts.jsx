import React from 'react';

import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
  const { posts, newPostText, changeNewPostText, addPost } = props;

  const renderPosts = () => {
    return posts.map(post => {
      return <Post key={post.id} message={post.message} id={post.id} />;
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    addPost();
  };

  const handleChangeTextarea = event => {
    const text = event.target.value;
    changeNewPostText(text);
  };

  return (
    <div>
      <h3>My posts</h3>

      <form className="form-post" onSubmit={handleSubmit}>
        <p>
          <textarea
            name="post"
            onChange={handleChangeTextarea}
            value={newPostText}
          />
        </p>
        <button>Add post</button>
      </form>

      <hr />

      <div className="post-list">{renderPosts()}</div>
    </div>
  );
};

export default MyPosts;

import React from 'react';

import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
  const { posts } = props;

  const renderPosts = () => {
    return posts.map(post => {
      return <Post key={post.id} message={post.message} id={post.id} />;
    });
  };

  return (
    <div>
      <h3>My posts</h3>

      <form className="form-post">
        <p>
          <textarea name="post" />
        </p>
        <button>Add post</button>
      </form>

      <hr />

      <div className="post-list">{renderPosts()}</div>
    </div>
  );
};

export default MyPosts;

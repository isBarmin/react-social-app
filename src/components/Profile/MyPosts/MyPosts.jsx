import React from 'react';

import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength50 = maxLengthCreator(50);

const MyPosts = props => {
  const { posts, addPost } = props;

  const renderPosts = () => {
    return posts.map(post => {
      return <Post key={post.id} message={post.message} id={post.id} />;
    });
  };

  const handleSubmit = values => {
    addPost(values.post);
  };

  return (
    <div>
      <h3>My posts</h3>
      <ProfileAddPostForm
        className={s['form-add-post']}
        onSubmit={handleSubmit}
      />
      <hr />
      <div className="post-list">{renderPosts()}</div>
    </div>
  );
};

let ProfileAddPostForm = ({ className, handleSubmit, ...props }) => {
  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className={s['form-row']}>
        <Field
          component={Textarea}
          name="post"
          placeholder="Enter you post"
          validate={[required, maxLength50]}
        />
      </div>
      <button>Add post</button>
    </form>
  );
};

ProfileAddPostForm = reduxForm({
  form: 'profileAddPostForm'
})(ProfileAddPostForm);

export default MyPosts;

// src/components/PostView.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './PostView.module.css';

const PostView = ({ posts, deletePost }) => {
  const { id } = useParams(); // useParams hook to get the id parameter from the URL
  const post = posts[id];

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className={styles['post-view']}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to="/">Back to Home</Link>
      <button onClick={() => deletePost(id)}>Delete</button>
    </div>
  );
};

export default PostView;

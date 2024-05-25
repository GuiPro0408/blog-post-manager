// src/components/PostList.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './PostList.module.css';

const PostList = ({ posts, deletePost, setCurrentPost }) => {
  const navigate = useNavigate();

  const handleEdit = (index) => {
    setCurrentPost(index);
    navigate(`/edit/${index}`);
  };

  return (
    <div className={styles.grid}>
      {posts.map((post, index) => (
        <div key={index} className={styles.post}>
          <h2>{post.title}</h2>
          <p>{post.content.substring(0, 100)}...</p>
          <Link to={`/post/${index}`}>Read More</Link>
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => deletePost(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;

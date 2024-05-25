// src/components/EditPostForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './AddPostForm.module.css';

const EditPostForm = ({ posts, editPost }) => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (posts[id]) {
      setTitle(posts[id].title);
      setContent(posts[id].content);
    }
  }, [id, posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editPost(id, { title, content });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditPostForm;

// src/App.js
import React, { useState } from 'react';
import AddPostForm from './AddPostForm';
import PostList from './PostList';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (index) => {
    const newPosts = posts.filter((_, i) => i !== index);
    setPosts(newPosts);
  };

  return (
    <div className="App">
      <h1>Blog Post Manager</h1>
      <AddPostForm addPost={addPost} />
      <PostList posts={posts} deletePost={deletePost} />
    </div>
  );
};

export default App;

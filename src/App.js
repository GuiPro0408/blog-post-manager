// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddPostForm from './components/AddPostForm';
import PostList from './components/PostList';
import PostView from './components/PostView';
import styles from './App.module.css'; // Import the CSS file for the App component path example: src/App.module.css

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (index) => {
    const newPosts = posts.filter((_, i) => i !== index); // render an array of posts without the post at the specified index
    setPosts(newPosts);
  };

  return (
    <Router>
      <div className={styles.App}>
        <h1>Blog Post Manager</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/add">Add Post</Link>
        </nav>
        <Routes>
          <Route path="/" element={<PostList posts={posts} deletePost={deletePost} />} />
          <Route path="/add" element={<AddPostForm addPost={addPost} />} />
          <Route path="/post/:id" element={<PostView posts={posts} deletePost={deletePost} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

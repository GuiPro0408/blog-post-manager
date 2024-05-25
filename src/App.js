// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddPostForm from './components/AddPostForm';
import EditPostForm from './components/EditPostForm';
import PostList from './components/PostList';
import PostView from './components/PostView';
import styles from './App.module.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (index) => {
    const newPosts = posts.filter((_, i) => i !== index);
    setPosts(newPosts);
  };

  const editPost = (index, updatedPost) => {
    const newPosts = posts.map((post, i) => (i === index ? updatedPost : post)); // updatedPost is the new post object and post is the existing post object
    console.log(newPosts);
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
          <Route path="/" element={<PostList posts={posts} deletePost={deletePost} setCurrentPost={setCurrentPost} />} />
          <Route path="/add" element={<AddPostForm addPost={addPost} />} />
          <Route path="/edit/:id" element={<EditPostForm posts={posts} editPost={editPost} currentPost={currentPost} />} />
          <Route path="/post/:id" element={<PostView posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

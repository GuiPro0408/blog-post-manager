// src/components/PostList.js
import React from 'react';

const PostList = ({ posts, deletePost }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.content.substring(0, 100)}...</p>
          <button onClick={() => deletePost(index)}>Delete</button>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;

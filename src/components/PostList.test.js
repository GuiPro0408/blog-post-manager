// src/components/PostList.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PostList from './PostList';

test('renders PostList and deletes post', () => {
  const posts = [{ title: 'Test Title', content: 'Test Content' }];
  const deletePost = jest.fn();
  const { getByText } = render(
    <MemoryRouter>
      <PostList posts={posts} deletePost={deletePost} />
    </MemoryRouter>
  );

  fireEvent.click(getByText(/Delete/i));
  expect(deletePost).toHaveBeenCalled();
});

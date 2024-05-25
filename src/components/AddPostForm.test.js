// src/components/AddPostForm.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddPostForm from './AddPostForm';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders AddPostForm and submits data', () => {
  const addPost = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <Router>
      <AddPostForm addPost={addPost} />
    </Router>
  );

  fireEvent.change(getByPlaceholderText(/Title/i), { target: { value: 'Test Title' } });
  fireEvent.change(getByPlaceholderText(/Content/i), { target: { value: 'Test Content' } });
  fireEvent.click(getByText(/Submit/i));

  expect(addPost).toHaveBeenCalledWith({ title: 'Test Title', content: 'Test Content' });
});

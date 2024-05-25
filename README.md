# Blog Post Manager

This is a simple blog post manager built with React. It allows users to add, view, and delete blog posts. The application uses React Router for navigation and CSS modules for styling.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features
- **Add Post**: A form to input the title and content of a new blog post with a submit button to add the post to the list.
- **View Posts**: Display all posts in a grid format with the title and a truncated version of the content. Full posts can be viewed via a "Read More" link.
- **Edit Post**: Each post has an edit button that navigates to a form to update the title and content of the post.
- **Delete Post**: Each post has a delete button that removes the post from the list.
- **Styling**: Uses CSS modules for styling the application to ensure an aesthetically pleasing UI.
- **Routing**: Utilizes React Router for navigation between different views.
- **Local Storage**: Persists posts in local storage to maintain data between sessions.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/blog-post-manager.git
   cd blog-post-manager
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage
### Adding a Post
1. Navigate to the "Add Post" page using the navigation links.
2. Fill in the title and content fields.
3. Click the "Submit" button to add the post.

### Viewing Posts
1. The homepage displays a grid of all posts.
2. Click on the "Read More" link to view the full content of a post.

### Editing a Post
1. On the homepage, each post has an "Edit" button.
2. Click the "Edit" button to navigate to the edit form.
3. Update the title and content fields.
4. Click the "Update" button to save changes.

### Deleting a Post
1. On the homepage, each post has a "Delete" button.
2. Click the "Delete" button to remove the post from the list.

## Project Structure
```
blog-post-manager
│-- .gitignore
│-- README.md
│-- package-lock.json
│-- package.json
│-- public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── components
    │   ├── AddPostForm.js
    │   ├── AddPostForm.module.css
    │   ├── AddPostForm.test.js
    │   ├── EditPostForm.js
    │   ├── PostList.js
    │   ├── PostList.module.css
    │   ├── PostList.test.js
    │   ├── PostView.js
    │   ├── PostView.module.css
    ├── App.js
    ├── App.module.css
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js
```

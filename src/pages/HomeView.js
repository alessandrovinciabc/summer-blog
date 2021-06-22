import React from 'react';

import PostList from '../components/PostList';

import Container from 'react-bootstrap/Container';

function HomeView(props) {
  let { posts } = props;
  return (
    <Container fluid>
      <h1 className="text-center mt-3">Home</h1>
      <div className="posts-container d-flex flex-column align-items-center">
        <PostList posts={posts} />
      </div>
    </Container>
  );
}

export default HomeView;

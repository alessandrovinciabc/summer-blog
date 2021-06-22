import React from 'react';

import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

function PostView(props) {
  let { id } = useParams();

  let { posts } = props;
  let requestedPost = posts.find((post) => post._id === id);

  return (
    <Container className="d-flex justify-content-center" fluid>
      {requestedPost && (
        <div className="post">
          <h1>{requestedPost.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: requestedPost.html }}></div>
          <div class="comments"></div>
        </div>
      )}
    </Container>
  );
}

export default PostView;

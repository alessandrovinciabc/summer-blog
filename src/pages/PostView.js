import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import CommentForm from '../components/CommentForm';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { getComments } from '../util/apiOperations';

function PostView(props) {
  let { id } = useParams();
  let [comments, setComments] = useState([]);
  let [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (id == null) return;
    getComments(id)
      .then((newComments) => {
        setComments(newComments.data);
      })
      .catch((err) => {
        if (err.response.status === 404) return;
      });
  }, [id]);

  let { posts } = props;
  let requestedPost = posts.find((post) => post._id === id);

  return (
    <Container className="d-flex justify-content-center" fluid>
      {requestedPost && (
        <div className="post">
          <h1>{requestedPost.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: requestedPost.html }}></div>
          <section className="comments my-5">
            <header>
              <h2>Comments</h2>
            </header>
            <Button
              onClick={() => {
                setShowForm(!showForm);
              }}
              className="new-comment-btn my-3"
            >
              New Comment
            </Button>
            {showForm && <CommentForm id={id} />}
            <div>
              {comments.length > 0 &&
                comments.map((comment) => {
                  return (
                    <Card
                      key={comment._id}
                      className="post-summary my-3 w-100 position-relative"
                    >
                      <Card.Body className="pb-4">
                        <Card.Title>{comment.owner}</Card.Title>
                        {comment.text}
                        <div className="text-muted position-absolute bottom-0 end-0">
                          {new Date(comment.createdAt).toLocaleDateString()}
                        </div>
                      </Card.Body>
                    </Card>
                  );
                })}
            </div>
          </section>
        </div>
      )}
    </Container>
  );
}

export default PostView;

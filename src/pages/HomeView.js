import React from 'react';

import PostList from '../components/PostList';

function HomeView(props) {
  let { posts } = props;
  return (
    <>
      <PostList posts={posts} />
    </>
  );
}

export default HomeView;

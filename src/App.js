import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { getPosts } from './util/apiOperations';

import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

//Pages
import PostView from './pages/PostView';
import HomeView from './pages/HomeView';

function sortPosts(a, b) {
  let dates = {
    a: new Date(a.createdAt).getTime(),
    b: new Date(b.createdAt).getTime(),
  };

  if (dates.a < dates.b) {
    return 1;
  } else if (dates.a > dates.b) {
    return -1;
  } else if (dates.a === dates.b) {
    return 0;
  }
}

function App() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((newPosts) => {
      let sorted = newPosts.data.sort(sortPosts);

      setPosts(sorted);
    });
  }, []);

  return (
    <HashRouter>
      <Header className="bg-header" />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <HomeView posts={posts} />
        </Route>
        <Route path="/about" exact />
        <Route path="/post/:id" exact>
          <PostView posts={posts} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;

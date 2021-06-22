import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { getPosts } from './util/apiOperations';

import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

//Pages
import PostView from './pages/PostView';
import HomeView from './pages/HomeView';

function App() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((newPosts) => {
      setPosts(newPosts.data);
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

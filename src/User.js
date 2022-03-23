import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserProfile from './UserProfile';
import PostList from './PostList';

export default function User() {
  return (
    <Switch>
        <Route path={"/users/:userId/posts"}>
            <PostList />
        </Route>
        <Route path={"/users/:userId"}>
            <UserProfile />
        </Route>
    </Switch>
  );
}
import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import DialogsContainer from '../Dialogs/DialogsContainer';
import Users from '../Users/Users';

const App = props => {
  const { state } = props;

  return (
    <div className="app">
      <Header />
      <Navbar />

      <main className="app__main">
        <Route path="/profile" render={() => <Profile posts={state.posts} />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <Users />} />
      </main>
    </div>
  );
};

export default App;

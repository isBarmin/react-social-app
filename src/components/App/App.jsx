import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import DialogsContainer from '../Dialogs/DialogsContainer';
import UsersContainer from '../Users/UsersContainer';

const App = props => {
  return (
    <div className="app">
      <Header />
      <Navbar />

      <main className="app__main">
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </main>
    </div>
  );
};

export default App;

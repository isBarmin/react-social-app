import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import Users from '../Users/Users';

const App = props => {
  const { state } = props;

  return (
    <div className="app">
      <Header />
      <Navbar />

      <main className="app__main">
        <Route path="/profile" render={() => <Profile posts={state.posts} />} />
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs dialogs={state.dialogs} messages={state.messages} />
          )}
        />
        <Route path="/users" render={() => <Users />} />
      </main>
    </div>
  );
};

export default App;

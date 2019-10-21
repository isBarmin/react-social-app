import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import ProfileContainer from "../Profile/ProfileContainer";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";

const App = props => {
  return (
    <div className="app">
      <Header />
      <Navbar />

      <main className="app__main">
        <Route path="/login" render={() => <Login />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </main>
    </div>
  );
};

export default App;

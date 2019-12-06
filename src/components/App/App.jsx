import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import './App.css';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import ProfileContainer from '../Profile/ProfileContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import UsersContainer from '../Users/UsersContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeAppTC } from '../../store/app-reducer';
import Preloader from '../Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

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
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    {
      initializeApp: initializeAppTC
    }
  )
)(App);

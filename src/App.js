import './App.css';
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import AppBar from './components/AppBar/AppBar';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import PhonebookView from './views/PhonebookView';

export default function App() {
  return (
    <>
      <AppBar />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>

          <Route exact path="/register">
            <RegisterView />
          </Route>

          <Route exact path="/login">
            <LoginView />
          </Route>

          <Route exact path="/phonebook">
            <PhonebookView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

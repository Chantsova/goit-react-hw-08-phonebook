import './App.css';
import React, { Suspense, useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Redirect } from 'react-router';
import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import * as authOperations from './redux/auth/auth-operations';
import { authSelectors } from './redux/auth/auth-selectors';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const PhonebookView = lazy(() => import('./views/PhonebookView'));

export default function App() {
  const dispatch = useDispatch();
  const isFethingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFethingCurrentUser && (
        <>
          <AppBar />

          <Suspense fallback={<h1>Loading...</h1>}>
            <div className="wrapper">
              <Switch>
                <PublicRoute exact path="/">
                  <HomeView />
                </PublicRoute>

                <PublicRoute exact path="/register" restricted>
                  <RegisterView />
                </PublicRoute>

                <PublicRoute
                  exact
                  path="/login"
                  redirectTo="/phonebook"
                  restricted
                >
                  <LoginView />
                </PublicRoute>

                <PrivateRoute exact path="/phonebook" redirectTo="/login">
                  <PhonebookView />
                </PrivateRoute>

                <Redirect from="*" to="/" />
              </Switch>
            </div>
          </Suspense>
        </>
      )}
    </>
  );
}

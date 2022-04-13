import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { PATH } from '../constants/Paths/Path'
import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import LoginPage from '../pages/authen/LoginPage/Login.page'
import ForgotPasswordPage from '../pages/authen/ForgotPasswordPage/ForgotPasswordPage'
import ChangePasswordPage from '../pages/authen/ChangePasswordPage/ChangePasswordPage'
import RegistrationPage from '../pages/authen/RegistrationPage/RegistrationPage'

const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route path={PATH.INDEX} exact>
          <HomePage />
        </Route>
        <Route path={PATH.LOGIN} exact>
          <LoginPage />
        </Route>
        <Route path={PATH.FORGOT_PASSWORD} exact>
          <ForgotPasswordPage />
        </Route>
        <Route path={PATH.CHANGE_PASSWORD} exact>
          <ChangePasswordPage />
        </Route>
        <Route path={PATH.REGISTRATION} exact>
          <RegistrationPage />
        </Route>
        <Route path="/index.html">
          <Redirect to="/" />
        </Route>
        <Route path="*" component={() => <ErrorPage code={404} />} />
      </Switch>
    </>
  )
}
export default AppRouter

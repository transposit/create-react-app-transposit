/*
 * Copyright 2018 Transposit Corporation. All Rights Reserved.
 */

import * as React from "react";
import "./App.css";
import { Transposit } from "transposit";
import { Login } from "./Login";
import { Button, Card } from "antd";
import { MainContent } from "./MainContent";
import {
  Route,
  Redirect,
  Switch,
  withRouter,
  RouteComponentProps
} from "react-router-dom";
import { NoMatch } from "./NoMatch";
import { HandleLogin } from "./HandleLogin";

const logo = require("./logo.svg");

const serviceMaintainer = "${SERVICE_MAINTAINER}";
const serviceName = "${SERVICE_NAME}";
const transpositUrl = "${TRANSPOSIT_URL}";
// Export the instance of the Transposit SDK. This can be imported and used in other files
export const transposit = new Transposit(
  serviceMaintainer,
  serviceName,
  transpositUrl
);

/*
 * Contains top-level application logic, including routing and the sidebar.
 *
 * Routes:
 *   * /login - has a button to start the login flow. Logged out users are redirected here.
 *   * /handle-login - completes the login process and then redirects to the
 *                     main content. Use this as the redirect url in your deploy configuration.
 *   * / - the logged in content for the application
 *
 * If none of these match, a 404 page is displayed (NoMatch.tsx)
 */
class AppContent extends React.Component<RouteComponentProps<{}>, {}> {
  constructor(props: RouteComponentProps<{}>) {
    super(props);
  }

  logOut = async () => {
    if (!transposit) {
      throw new Error("logOut called but the Transposit SDK is not available");
    }
    await transposit.logOut();
    location.reload();
  }

  renderRoutes() {
    const loggedInUser = transposit && transposit.getUserInfo();

    if (!loggedInUser) {
      return (
        <Switch>
          <Route
            exact={true}
            path="/login"
            render={() => (
              <Login
                transpositUrl={transpositUrl}
                maintainer={serviceMaintainer}
                serviceName={serviceName}
              />
            )}
          />
          <Route exact={true} path="/handle-login" component={HandleLogin} />
          <Route component={() => <Redirect to="/login" />} />
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route exact={true} path="/" render={() => <MainContent />} />
          <Route component={NoMatch} />
        </Switch>
      );
    }
  }

  render() {
    const loggedInUser = transposit && transposit.getUserInfo();
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to Transposit</h1>
        </header>
        <div className="app-sidebar">
          {
            <Card className="app-sidebar-card">
              <div>
                Service: {serviceMaintainer}/{serviceName}
              </div>
              <div>Transposit url: {transpositUrl}</div>
            </Card>
          }
          {loggedInUser && (
            <Card className="app-sidebar-card">
              <div>Logged in as: {loggedInUser}</div>
              <div>
                <Button onClick={this.logOut}>Log out</Button>
              </div>
              <div>
                <Button href={transposit.getConnectLocation()} target="_blank">
                  Settings
                </Button>
              </div>
            </Card>
          )}
        </div>
        {this.renderRoutes()}
      </div>
    );
  }
}

// Wrap with withRouter to make sure we re-render when the route changes
export default withRouter(AppContent);

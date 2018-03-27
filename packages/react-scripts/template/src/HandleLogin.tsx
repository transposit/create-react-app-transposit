/*
 * Copyright 2018 Transposit Corporation. All Rights Reserved.
 */

import * as React from "react";
import { transposit } from "./AppContent";
import { message } from "antd";
import { Redirect } from "react-router";

interface State {
  finishedTryingLogin: boolean;
}

/*
 * Uses the Transposit SDK to complete the login process.
 * The SDK will grab the auth token from the url and save it in
 * local browser storage for later use.
 */
export class HandleLogin extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { finishedTryingLogin: false };
  }
  componentDidMount() {
    if (transposit) {
      try {
        transposit.handleLogin();
      } catch (err) {
        message.error(err.message);
      }
    }

    this.setState({ finishedTryingLogin: true });
  }

  render() {
    const { finishedTryingLogin } = this.state;
    // The first render componentDidMount will not yet have run.
    // If we redirect right away we'll lose the queryParams before
    // they are used in transposit.handleLogin().
    // Here we simply redirect to the base path and let the logic there
    // determine where to recirect next.
    return finishedTryingLogin ? <Redirect to={{ pathname: "/" }} /> : "";
  }
}

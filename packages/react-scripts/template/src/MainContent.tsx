/*
 * Copyright 2018 Transposit Corporation. All Rights Reserved.
 */

import * as React from "react";
import "./libs/css/layout.css";
// Uncomment the following import to access the Transposit SDK instance.
// import { transposit } from "./AppContent";

/*
 * Main content for the application once the user has been logged in.
 * Customize this with your application's content!
 *
 * Once you have imported the SDK instance, you can start calling operations by doing:
 *     transposit.runOperation("myOperation", [ list of params ]);
 */
export class MainContent extends React.Component<{}, {}> {
  render() {
    return (
      <div className="standard-content-width">
        <p>Logged in successfully!</p>
        <p>
          You can add your own content here by editing <b>MainContent.tsx</b>
        </p>
      </div>
    );
  }
}

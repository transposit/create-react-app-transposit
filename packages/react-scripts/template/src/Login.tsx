/*
 * Copyright 2018 Transposit Corporation. All Rights Reserved.
 */

import * as React from "react";
import { Button } from "antd";
import "./libs/css/layout.css";

interface Props {
  transpositUrl: string;
  maintainer: string;
  serviceName: string;
}

/*
 * Login page. Contains a button that starts the user through the google login flow.
 */
export const Login: React.StatelessComponent<Props> = ({
  transpositUrl,
  maintainer,
  serviceName
}) => (
  <div className="standard-content-width">
    <Button
      type="primary"
      onClick={() =>
        (window.location.href = `${transpositUrl}/app/v1/${maintainer}/${serviceName}/login/google?redirectUri=${
          window.location.origin
        }/handle-login`)
      }
    >
      Login
    </Button>
  </div>
);

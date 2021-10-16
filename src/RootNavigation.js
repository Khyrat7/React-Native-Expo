// creating a function inorder to allow the footer to navigate between pages.

import * as React from "react";
export const navigationRef = React.createRef();
export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

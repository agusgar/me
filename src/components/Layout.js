import React from "react";
import { hotjar } from "react-hotjar";
import Header from "./Header";

function Layout(props) {
  hotjar.initialize(2640397, 6);
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;

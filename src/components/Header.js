import React from "react";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/styles";

const AppBar = withStyles({
  root: {
    backgroundColor: "black",
  },
})(MuiAppBar);

function Header() {
  return (
    <AppBar position="static">
      <Toolbar></Toolbar>
    </AppBar>
  );
}

export default Header;

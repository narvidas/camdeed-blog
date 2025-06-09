import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";

export default (props) => (
  <nav className="navigation">
    <Link to="https://www.camdeed.com">Learn more</Link>
    <ThemeChanger />
  </nav>
);

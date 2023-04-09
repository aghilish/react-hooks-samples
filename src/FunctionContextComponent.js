import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

function FunctionContextComponet() {
  const dark = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyle = {
    backgroundColor: dark ? "#333" : "#CCC",
    color: dark ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle</button>
      <div style={themeStyle}>Function Theme</div>
    </>
  );
}

export default FunctionContextComponet;

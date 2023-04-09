import React from "react";
import FunctionContextComponet from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <div>
      <ThemeProvider>
        <FunctionContextComponet />
      </ThemeProvider>
    </div>
  );
}

export default App;

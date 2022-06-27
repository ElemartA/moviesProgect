import React from "react";
import AppRouter from "./AppRouter";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Crumb from "./components/Crumb/Crumb";

function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar />
      <Crumb />
      <AppRouter />
    </div>
  );
}

export default App;

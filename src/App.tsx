import React from "react";
import "./App.css";
import "./components/styles/main.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Strategy from "./components/Strategy/Strategy";
import Retaily from "./components/Retaily/Retaily";
import Statistics from "./components/Statistics/Statistics";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Strategy />
      <Retaily />
      <Statistics />
    </div>
  );
}

export default App;

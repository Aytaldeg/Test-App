import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Partner from "./components/Pages/Partner";
import Store from "./components/Pages/Store";
import About from "./components/Pages/About";
import Footer from "./components/Footer/Footer";
import Docs from "./components/Pages/Docs";
import Vacancies from "./components/Pages/Vacancies";
import Contacts from "./components/Pages/Contacts";
import Manager from "./components/Pages/Jobs/Manager";

function App() {
  const [isSwitched, setIsSwitched] = useState<boolean>(true);

  let toggle = () => {
    setIsSwitched(!isSwitched);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header isSwitched={isSwitched} toggled={toggle} />
        <Routes>
          <Route path="/" element={isSwitched ? <Partner /> : <Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/documents" element={<Docs />} />
          <Route path="/jobs" element={<Vacancies />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/manager" element={<Manager />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header/Header";
import Partner from "./components/Pages/Partner";
import Store from "./components/Pages/Store";
import Footer from "./components/Footer/Footer";
import {useState} from 'react';

function App() {
  const [isSwitched, setIsSwitched] = useState<boolean>(false);

  let toggle = () => {
    setIsSwitched(!isSwitched)
  }

  return (
    <div className="App">
      <Header isSwitched={isSwitched} toggled={toggle}/>
      {isSwitched ? <Partner/> : <Store/>}
      <Footer />
    </div>
  );
}

export default App;

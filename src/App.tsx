import "./App.css";
import "./components/styles/partner.scss";
import Header from "./components/Header/Header";
import Partner from "./components/Pages/Partner";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Partner />
      <Footer />
    </div>
  );
}

export default App;

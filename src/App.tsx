import "./App.css";
import Header from "./components/Header/Header";
import Partner from "./components/Pages/Partner";
import Store from "./components/Pages/Store";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Partner />
      {/* <Store /> */}
      <Footer />
    </div>
  );
}

export default App;

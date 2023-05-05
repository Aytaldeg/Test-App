import "./App.css";
import Header from "./components/Header/Header";
import Partner from "./components/Pages/Partner";
import Store from "./components/Pages/Store";
import About from "./components/Pages/About";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [isSwitched, setIsSwitched] = useState<boolean>(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: isSwitched ? <Partner /> : <Store />,
    },
    {
      path: "/about",
      element: (
        <About />
      ),
    },
  ]);

  let toggle = () => {
    setIsSwitched(!isSwitched);
  };

  return (
    <div className="App">
      <Header isSwitched={isSwitched} toggled={toggle} />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;

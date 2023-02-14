import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="App">
          <Header />
          <Hero />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

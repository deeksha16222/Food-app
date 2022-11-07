import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import CardDetails from "./components/CardsDetails";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/cart" element={<CardDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

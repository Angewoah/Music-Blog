import Navbar from "./Navbar";
import About from "./pages/About";
import Review from "./pages/Review";
import Home from "./pages/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {


  return (
  <>
    <Navbar />
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Review />} />
        </Routes>
      </div>

    </div>
    
  </>
  );
}

export default App;

import Navbar from "./Navbar";
import About from "./pages/About";
import Review from "./pages/Review";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {


  return (
  <>
    <Navbar />
    <div classname="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Review />} />
      </Routes>
    </div>
  </>
  );
}

export default App;

import Navbar from "./Navbar";
import About from "./pages/About";
import Reviews from "./pages/Review";
import Home from "./pages/Home";

function App() {

  let component

  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/about":
      component = <About />
      break
    case "/reviews":
      component = <Reviews />
      break
    default:
      break
  }
  return (
  <>
    <Navbar />
    {component}
  </>
  );
}

export default App;

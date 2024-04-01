// import './App.css';
import { Navbar } from "../Navbar & Footer/Navbar";
import { Home } from "./Home";
import { Products } from "./Products";
import { About } from "./About";
import { Steps } from "./Steps";
import { Testimonial } from "./Testimonial";
import { Footer } from "../Navbar & Footer/Footer";

function HomePage() {
  return (
    <div className="App">
      <Home />
      <Products />
      <About />
      <Steps />
      <Testimonial />
    </div>
  );
}

export default HomePage;

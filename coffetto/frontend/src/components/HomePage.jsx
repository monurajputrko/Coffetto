// import './App.css';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { Products } from './Products';
import { About } from './About';
import { Steps } from './Steps';
import { Testimonial } from './Testimonial';
import { Footer } from './Footer';

function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Products />
      <About />
      <Steps />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default HomePage;

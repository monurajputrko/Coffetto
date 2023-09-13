
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Products } from './components/Products';
import { About } from './components/About';
import { Steps } from './components/Steps';
import { Testimonial } from './components/Testimonial';
import { Footer } from './components/Footer';

function App() {
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

export default App;


import './App.css';
import AllRoutes from './Routes/AllRoutes';
import { Footer } from './components/Navbar & Footer/Footer';
import { Navbar } from './components/Navbar & Footer/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;

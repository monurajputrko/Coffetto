import { Route, Routes } from 'react-router-dom';
import { About } from './../components/About';
import { Products } from './../components/Products';
import { Steps } from './../components/Steps';
import HomePage from '../components/HomePage';

const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/steps" component={Steps} />
      </Routes>
   
  );
};

export default AllRoutes;

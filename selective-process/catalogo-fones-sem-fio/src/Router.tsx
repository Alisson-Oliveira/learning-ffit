import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Index';
import Details from './pages/Details/Index';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter> 
  )
}

export default Router;
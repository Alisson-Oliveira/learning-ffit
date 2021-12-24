import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Contacts } from '../pages/Contacts';
import { About } from '../pages/About';

export function Router() {
  return (
    <BrowserRouter basename='test-2'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter> 
  )
}
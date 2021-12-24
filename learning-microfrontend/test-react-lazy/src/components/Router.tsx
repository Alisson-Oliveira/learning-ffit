import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('../pages/Home'));
const Contacts = React.lazy(() => import('../pages/Contacts'));
const About = React.lazy(() => import('../pages/About'));

export function Router() {

  const handleFallback = () => <h1>Loading...</h1>;

  return (
    <Suspense fallback={handleFallback}>
      <BrowserRouter basename='test-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Suspense> 
  )
}
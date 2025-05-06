import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from "../layout/PageLayout";
import EquipeContato from "../pages/EquipeContato";

const Home = lazy (() => import("../pages/Home"));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));


const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Carregando...</div>}>
          <Routes>
            <Route path="/" element={<PageLayout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/equipecontato/:id/:user" element={<EquipeContato />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
 
export default Paths;
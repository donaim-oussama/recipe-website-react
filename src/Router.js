import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Recipe from './SinglePage';
import About from './aboutus';
import Fav from './fav';
//import Recipe from "./Recipe";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} exact />
      <Route path="/recipe/:id" element={<Recipe/>} />
      <Route path="/aboutus" element={<About/>}/>
      <Route path="/favorites" element={<Fav/>}/>
    </Routes>
  </BrowserRouter>
);

export default Router;
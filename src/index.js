import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import HomePage from './Landing_page/home/HomePage';
import SignUp from './Landing_page/signup/SignUp';
import SupportPage from './Landing_page/support/Hero';
import AboutPage from './Landing_page/about/AboutPage';
import ProductHero from './Landing_page/products/ProductHero';
import PricingPage from './Landing_page/pricing/PricingPage';
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';
import NotFound from './Landing_page/NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar></Navbar>
  <Routes>
    <Route path='/'element={<HomePage></HomePage>}/>
    <Route path='/signup'element={<SignUp></SignUp>}/>
    <Route path='/support'element={<SupportPage></SupportPage>}/>
    <Route path='/about'element={<AboutPage></AboutPage>}/>
    <Route path='/product'element={<ProductHero></ProductHero>}/>
    <Route path='/pricing'element={<PricingPage></PricingPage>}/>
    <Route path='*'element={<NotFound></NotFound>}/>
    
  </Routes>
  <Footer></Footer>
  
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

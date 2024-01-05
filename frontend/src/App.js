import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ListingDetail from "./pages/ListingDetail";
import Listings from "./pages/Listings";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./components/NotFound";

import { Provider } from "react-redux";
import store from "./context/store";

import './sass/main.scss'

const App = () => {
  return (
    <>
    <Provider store={store}>
    <Router>
    <Layout>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        
        <Route path="/listings" element={<Listings/>} />
        <Route path="/listings/:id" element={<ListingDetail/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route element={<NotFound/>} />
      </Routes>
    </Layout>
  </Router>

    </Provider>
  
  </>

  )
  
  
}

export default App;

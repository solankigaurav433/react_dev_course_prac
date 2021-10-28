import React from "react";
import "./App.css";
import FetchHook from "./FetchHook";
import {Routes, Route} from "react-router-dom";
import {Home} from './Home';
import { Contact, Location, Services} from './pages';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/about" element={<FetchHook/>}>
        <Route path="location" element={<Location/>}/>
        <Route path="services" element={<Services/>}/>  
          </Route>
        <Route path="/contact" element={<Contact/>}/>
        

      </Routes>
    
    </div>
  );
}

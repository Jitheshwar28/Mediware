import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavScrollExample from './Components/nav';
import Upload from './Components/upload';
import Inventory from './Components/Inventory';
import data from "./Components/cards.json";
import Details from './Components/Details';
import { useState } from 'react';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';
// import Upload from './Components/upload'
function App() {

    const [search,setSearch] = useState('');
  return (
    
    <div >
      <BrowserRouter>
      <NavScrollExample setSearch={setSearch}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/inventory" element={<Inventory data={data} search={search}/>}/>
        <Route path="/details/:id" element={<Details />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;

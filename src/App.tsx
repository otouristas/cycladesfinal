import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Hotels from './pages/Hotels';
import IslandGuides from './pages/IslandGuides';
import RentACar from './pages/RentACar';
import ListingForm from './components/ListingForm';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar onAuthClick={() => {}} />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/guides" element={<IslandGuides />} />
            <Route path="/rent-a-car" element={<RentACar />} />
            <Route path="/list-property" element={<ListingForm />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
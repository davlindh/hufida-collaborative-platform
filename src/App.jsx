import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { navItems } from './nav-items';
import CleanWaterInitiative from './pages/CleanWaterInitiative';
import SustainableWasteManagement from './pages/SustainableWasteManagement';
import FavingProject from './pages/FavingProject';
import DigitalLiteracyProgram from './pages/DigitalLiteracyProgram';
import RenewableEnergySolutions from './pages/RenewableEnergySolutions';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            {navItems.map((item) => (
              <Route key={item.to} path={item.to} element={item.page} />
            ))}
            <Route path="/projects/clean-water-initiative" element={<CleanWaterInitiative />} />
            <Route path="/projects/sustainable-waste-management" element={<SustainableWasteManagement />} />
            <Route path="/projects/faving" element={<FavingProject />} />
            <Route path="/projects/digital-literacy" element={<DigitalLiteracyProgram />} />
            <Route path="/projects/renewable-energy-solutions" element={<RenewableEnergySolutions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

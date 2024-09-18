import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { navItems } from './nav-items';
import CleanWaterInitiative from './pages/CleanWaterInitiative';
import SustainableWasteManagement from './pages/SustainableWasteManagement';
import FavingProject from './pages/FavingProject';
import DigitalLiteracyProgram from './pages/DigitalLiteracyProgram';
import RenewableEnergySolutions from './pages/RenewableEnergySolutions';
import SustainabilityIncubatorLab from './pages/SustainabilityIncubatorLab';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
              <Route path="/projects/sustainability-incubator-lab" element={<SustainabilityIncubatorLab />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

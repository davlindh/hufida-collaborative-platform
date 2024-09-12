import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import Navigation from "./components/Navigation";
import FavingProject from "./pages/FavingProject";
import SustainableWasteManagement from "./pages/SustainableWasteManagement";
import SustainabilityIncubatorLab from "./pages/SustainabilityIncubatorLab";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Navigation />
        <Routes>
          {navItems.map(({ to, page }) => (
            <Route key={to} path={to} element={page} />
          ))}
          <Route path="/projects/faving" element={<FavingProject />} />
          <Route path="/projects/sustainable-waste-management" element={<SustainableWasteManagement />} />
          <Route path="/projects/sustainability-incubator-lab" element={<SustainabilityIncubatorLab />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
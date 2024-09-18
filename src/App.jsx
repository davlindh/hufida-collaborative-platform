import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems, projectRoutes } from "./nav-items";
import Navigation from "./components/Navigation";
import FavingProject from "./pages/FavingProject";
import SustainableWasteManagement from "./pages/SustainableWasteManagement";
import SustainabilityIncubatorLab from "./pages/SustainabilityIncubatorLab";
import ProjectDetails from "./pages/ProjectDetails";
import DigitalLiteracyProgram from "./pages/DigitalLiteracyProgram";
import CleanWaterInitiative from "./pages/CleanWaterInitiative";
import RenewableEnergySolutions from "./pages/RenewableEnergySolutions";
import Donate from "./pages/Donate";
import ProjectNotFound from "./components/ProjectNotFound";

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
          <Route path="/digital-literacy-program" element={<DigitalLiteracyProgram />} />
          <Route path="/projects/clean-water-initiative" element={<CleanWaterInitiative />} />
          {projectRoutes.map(({ to, title }) => (
            <Route key={to} path={to} element={<RenewableEnergySolutions />} />
          ))}
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<ProjectNotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { HomeIcon, FolderIcon, HeartHandshakeIcon, PiggyBankIcon, InfoIcon, UsersIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Projects from "./pages/Projects.jsx";
import Volunteer from "./pages/Volunteer.jsx";
import Donate from "./pages/Donate.jsx";
import About from "./pages/About.jsx";
import Partners from "./pages/Partners.jsx";
import RenewableEnergySolutions from "./pages/RenewableEnergySolutions.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Projects",
    to: "/projects",
    icon: <FolderIcon className="h-4 w-4" />,
    page: <Projects />,
  },
  {
    title: "Volunteer",
    to: "/volunteer",
    icon: <HeartHandshakeIcon className="h-4 w-4" />,
    page: <Volunteer />,
  },
  {
    title: "Donate",
    to: "/donate",
    icon: <PiggyBankIcon className="h-4 w-4" />,
    page: <Donate />,
  },
  {
    title: "Partners",
    to: "/partners",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <Partners />,
  },
  {
    title: "Renewable Energy Solutions",
    to: "/projects/renewable-energy-solutions",
    icon: <FolderIcon className="h-4 w-4" />,
    page: <RenewableEnergySolutions />,
  },
];

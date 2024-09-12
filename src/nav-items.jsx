import { HomeIcon, FolderIcon, HeartHandshakeIcon, PiggyBankIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Projects from "./pages/Projects.jsx";
import Volunteer from "./pages/Volunteer.jsx";
import Donate from "./pages/Donate.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
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
];
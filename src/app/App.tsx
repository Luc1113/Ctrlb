import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Philosophy } from "./components/Philosophy";
import { Mission } from "./components/Mission";
import { Team } from "./components/Team";
import { Reel } from "./components/Reel";
import { Contact } from "./components/Contact";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <Hero />
        <Philosophy />
        <Mission />
        <Team />
        <Reel />
        <Contact />
      </main>
    </div>
  );
}

import { AppBar, Button, CssBaseline, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { CarFront, MenuIcon } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import CarsGrid from "./components/CarGrids";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {
  const [mobileMenuEl, setMobileMenuEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMenuEl);

  return (
    <>
      <CssBaseline />
      <div className="min-h-screen bg-white text-slate-900 bg-slate-950 text-slate-100">
        {/* Navbar */}
        <AppBar position="sticky" elevation={0} className="!bg-slate-900/70 backdrop-blur border-b border-slate-200/60 border-white/10">
          <Toolbar className="max-w-screen-lg mx-auto w-full">
            <div className="flex items-center gap-2">
              <CarFront />
              <Typography variant="h6" className="font-bold">DriveNow</Typography>
            </div>
            <div className="ml-auto hidden md:flex items-center gap-1">
              <Button href="#home" sx={{color:'white'}}>Home</Button>
              <Button href="#about" sx={{color:'white'}}>About</Button>
              <Button href="#cars" sx={{color:'white'}}>Cars</Button>
              <Button href="#contact" sx={{color:'white'}}>Contact</Button>
            </div>
            <div className="md:hidden ml-auto flex items-center gap-2">
             
              <IconButton onClick={(e) => setMobileMenuEl(e.currentTarget)}>
                <MenuIcon />
              </IconButton>
              <Menu anchorEl={mobileMenuEl} open={isMobileMenuOpen} onClose={() => setMobileMenuEl(null)} sx={{color:"red"}}>
                <MenuItem component="a" href="#home" onClick={() => setMobileMenuEl(null)}>Home</MenuItem>
                <MenuItem component="a" href="#about" onClick={() => setMobileMenuEl(null)}>About</MenuItem>
                <MenuItem component="a" href="#cars" onClick={() => setMobileMenuEl(null)}>Cars</MenuItem>
                <MenuItem component="a" href="#contact" onClick={() => setMobileMenuEl(null)}>Contact</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>

        {/* Hero */}
        <Hero />
        {/* About */}
        <About />
        {/* Cars */}
        <CarsGrid />
        {/* Contact */}
        <Contact />
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
import { AppBar, Button, createTheme, CssBaseline, Divider, IconButton, Menu, MenuItem, ThemeProvider, Toolbar, Tooltip, Typography } from "@mui/material";
import { CarFront, MenuIcon, MoonStar, Sun } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import CarsGrid from "./components/CarGrids";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useMemo, useState } from "react";

export default function App() {
  const [mobileMenuEl, setMobileMenuEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMenuEl);

  return (
    <>
      <CssBaseline />
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        {/* Navbar */}
        <AppBar position="sticky" elevation={0} className="!bg-white/70 dark:!bg-slate-900/70 backdrop-blur border-b border-slate-200/60 dark:border-white/10">
          <Toolbar className="max-w-screen-lg mx-auto w-full">
            <div className="flex items-center gap-2">
              <CarFront />
              <Typography variant="h6" className="font-bold">DriveNow</Typography>
            </div>
            <div className="ml-auto hidden md:flex items-center gap-1">
              <Button href="#home">Home</Button>
              <Button href="#about">About</Button>
              <Button href="#cars">Cars</Button>
              <Button href="#contact">Contact</Button>
              <Divider orientation="vertical" flexItem className="mx-2" />
             
            </div>
            <div className="md:hidden ml-auto flex items-center gap-2">
             
              <IconButton onClick={(e) => setMobileMenuEl(e.currentTarget)}>
                <MenuIcon />
              </IconButton>
              <Menu anchorEl={mobileMenuEl} open={isMobileMenuOpen} onClose={() => setMobileMenuEl(null)}>
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
import { Container } from "@mui/material";

export default function Footer() {
  return (
    <footer className="py-10 border-t dark:border-white/10">
      <Container maxWidth="lg" className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="opacity-70">© {new Date().getFullYear()} DriveNow. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#home" className="opacity-80 hover:opacity-100">Home</a>
          <a href="#about" className="opacity-80 hover:opacity-100">About</a>
          <a href="#cars" className="opacity-80 hover:opacity-100">Cars</a>
          <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
        </div>
      </Container>
    </footer>
  );
}
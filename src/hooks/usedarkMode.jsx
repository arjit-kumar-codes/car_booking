import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [mode, setMode] = useState(() => (typeof window !== 'undefined' ? (localStorage.getItem('app-theme') || 'light') : 'light'));
  useEffect(() => {
    localStorage.setItem('app-theme', mode);
    const root = document.documentElement;
    if (mode === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
  }, [mode]);
  return [mode, setMode];
}
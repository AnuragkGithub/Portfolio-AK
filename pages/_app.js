import "../styles/globals.css";
import { useState, useEffect } from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Lenis from "lenis";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState("cyber");

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className={`app ${mode} ${plusJakartaSans.variable} ${inter.variable}`}>
      <Component
        {...pageProps}
        mode={mode}
        setMode={setMode}
      />
    </div>
  );
}
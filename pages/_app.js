import "../styles/globals.css";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState("cyber");

  useEffect(() => {
    document.body.classList.remove("cyber", "dark", "light");
    document.body.classList.add("app", mode);
  }, [mode]);

  return (
    <div className={`app ${mode}`}>
      <Component
        {...pageProps}
        mode={mode}
        setMode={setMode}
      />
    </div>
  );
}
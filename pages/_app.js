import "../styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState("cyber");

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
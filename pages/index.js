import { useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import CustomCursor from "../components/CustomCursor";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import ProjectShowcase from "../components/ProjectShowcase";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home({ mode, setMode }) {
  useEffect(() => {
    // Register GSAP ScrollTrigger on client side
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in animations for bento & timeline panels
    const panels = gsap.utils.toArray(".glass-panel");
    panels.forEach((panel) => {
      gsap.fromTo(
        panel,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Fade-in animations for section headings
    const headings = gsap.utils.toArray("h2");
    headings.forEach((heading) => {
      gsap.fromTo(
        heading,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 92%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Clean up ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Head>
        <title>Anurag Karmakar | Software Engineer & ServiceNow Expert</title>
        <meta 
          name="description" 
          content="Professional portfolio of Anurag Karmakar, Software Engineer specializing in ServiceNow automation, SPM modules, and scalable full-stack application design." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar mode={mode} setMode={setMode} />
      <CustomCursor />
      
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <ProjectShowcase />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import StorySection from "../components/StorySection";
import Experience from "../components/Experience";
import ProjectShowcase from "../components/ProjectShowcase";
import FeaturedCaseStudy from "../components/FeaturedCaseStudy";
import About from "../components/About";
import Contact from "../components/Contact";
import CustomCursor from "../components/CustomCursor";
import TechStack from "../components/TechStack";
import Navbar from "../components/Navbar";

export default function Home({ mode, setMode }) {
  return (
    <>
      <CustomCursor />
      <Navbar mode={mode} setMode={setMode} />

      <Hero mode={mode} />
      <Intro />
      <StorySection />
      <About />
      <Experience mode={mode} />
      <ProjectShowcase />
      <TechStack />
      <FeaturedCaseStudy />
      <Contact />
    </>
  );
}
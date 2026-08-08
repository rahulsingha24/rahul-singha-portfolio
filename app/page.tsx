import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Hackathons from "@/components/sections/Hackathons";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

/**
 * page.tsx
 *
 * The homepage. Its only job is to list the sections in the order they
 * appear.
 *
 * To reorder the site, move one line. To remove a section permanently,
 * delete its line - though emptying its data file does the same thing
 * and is easier to undo.
 */
export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
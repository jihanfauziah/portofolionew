import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MarqueeBar from '../components/MarqueeBar';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      {/* 1. Navbar */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Marquee Transition: About Me */}
        <MarqueeBar text="about me" reverse={false} />

        {/* 4. About Section */}
        <About />

        {/* 5. Skills Section */}
        <Skills />

        {/* 6. Marquee Transition: Projects */}
        <MarqueeBar text="presentation project" reverse={true} />

        {/* 7. Projects Section */}
        <Projects />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />
    </>
  );
}

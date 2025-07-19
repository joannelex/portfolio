import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Work from './pages/Work';
// import Education from './pages/Education';
// import Contact from './pages/Contact';

import SaveSimpleProject from './pages/SaveSimpleProject';
import NomProject from './pages/NomProject';

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const landingHeight = window.innerHeight * 0.9;
      setShowHeader(scrollY > landingHeight);

      const sections = ['about', 'work', 'education', 'contact'];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.33 && rect.bottom > 0) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Main scrolling page */}
        <Route
          path="/"
          element={
            <>
              {showHeader && (
                <div className="header-wrapper">
                  <Header activeSection={activeSection} />
                </div>
              )}

              <Landing />

              <section id="about" style={{ height: '100vh' }}>
                <About />
              </section>

              <section id="work" style={{ height: '100vh' }}>
                <Work />
              </section>

              {/* <section id="education" style={{ height: '100vh' }}>
                <Education />
              </section>

              <section id="contact" style={{ height: '100vh' }}>
                <Contact />
              </section> */}
            </>
          }
        />

        <Route path="/projects/savesimple" element={<SaveSimpleProject />} />
        <Route path="/projects/nom" element={<NomProject />} />
      </Routes>
    </Router>
  );
}

export default App;

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Process from './components/Process';
import Contact from './components/Contact';
import ServiceRequestForm from './components/ServiceRequestForm';
import Footer from './components/Footer';

// Start each new page at the top; hash links (/#services) are handled by HomePage
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  const { hash, key } = useLocation();

  // Scroll to the section named in the URL hash (e.g. /#services); key re-runs this when the same link is clicked again
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash, key]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <Process />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/request-service" element={<ServiceRequestForm />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

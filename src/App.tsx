import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Process from './components/Process';
import Contact from './components/Contact';
import ServiceRequestForm from './components/ServiceRequestForm';
import Footer from './components/Footer';

function HomePage() {
  const { hash } = useLocation();

  // Scroll to the section named in the URL hash (e.g. arriving from /request-service via /#services)
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

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
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/request-service" element={<ServiceRequestForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

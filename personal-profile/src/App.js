import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <section className="home">
      <h1>Welcome to My Personal Profile</h1>
      <p>Hi, I'm Angeles, Charles. This is my personal website where you can learn more about me, my education, projects, and how to contact me.</p>
    </section>
      </div>
      <Footer />
    </Router>
    
  );
}

export default App;

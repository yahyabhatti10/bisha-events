import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import EnchantingEvents from './pages/EnchantingEvents';
import ServicesView from './pages/ServicesView';
import CapturedMoments from './pages/CapturedMoments';
import SavorTheFlavor from './pages/SavorTheFlavor';
import DreamConsultation from './pages/DreamConsultation';
import LoveStories from './pages/LoveStories';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-warm-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/enchanting-events" element={<EnchantingEvents />} />
          <Route path="/enchanting-events/:serviceId" element={<ServicesView />} />
          <Route path="/captured-moments" element={<CapturedMoments />} />
          <Route path="/savor-the-flavor" element={<SavorTheFlavor />} />
          <Route path="/dream-consultation" element={<DreamConsultation />} />
          <Route path="/love-stories" element={<LoveStories />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
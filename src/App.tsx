import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';
import { Chatbot } from "./components/Chatbot";
import {Pricing} from './pages/Pricing';
import WhyChooseUs from './pages/WhyChooseUs';
import AIMLDevelopment from './pages/services/AIMLDevelopment';
import BusinessAutomation from './pages/services/BusinessAutomation';
import ChatbotIntegration from './pages/services/ChatbotIntegration';
import CloudAI from './pages/services/CloudAI';
import DataAnalytics from './pages/services/DataAnalytics';
import WebsiteDevelopment  from './pages/services/WebsiteDevelopment';
function App() {
  return (
    <Router>
      <div className="min-h-screen text-white">
        <Background />
        <Navbar />
        <Chatbot />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/chatbot-integration" element={<ChatbotIntegration />} />
          <Route path="/services/ai-ml-development" element={<AIMLDevelopment />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/cloud-ai" element={<CloudAI />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/business-automation" element={<BusinessAutomation />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './components/Privacy policy/PrivacyPolicy';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
     <>
        
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </>
   
  );
}

export default App;

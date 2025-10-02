import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import RossRoomsPage from './pages/RossRoomsPage';
import KresgeRoomsPage from './pages/KresgeRoomsPage';
import BlauRoomsPage from './pages/BlauRoomsPage';
import KresgeInterviewRoomsPage from './pages/KresgeInterviewRoomsPage';
import DonatePage from './pages/DonatePage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <main className="content">
        {/* Mario pipe decoration */}
        <div className="pipe"></div>
        
        {/* Ground decoration */}
        <div className="ground"></div>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/rooms/ross" element={<RossRoomsPage />} />
          <Route path="/rooms/kresge" element={<KresgeRoomsPage />} />
          <Route path="/rooms/blau" element={<BlauRoomsPage />} />
          <Route path="/rooms/kresge-interview" element={<KresgeInterviewRoomsPage />} />
          <Route path="/donate" element={<DonatePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; 
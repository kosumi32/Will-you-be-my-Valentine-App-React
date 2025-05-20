import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LovePage from './components/LovePage';
import './css/App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/love" element={<LovePage />} />
      </Routes>
    </Router>
  );
}


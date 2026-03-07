import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import BottomNav from './components/layout/BottomNav';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Simulator from './pages/Simulator';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/simulator" element={<Simulator />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

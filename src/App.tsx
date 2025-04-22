import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import SharedSecretDemo from './pages/SharedSecretDemo';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen w-screen overflow-x-hidden bg-gradient-to-br from-slate-900 to-gray-800 text-white">
        <div className="h-16 shrink-0">
          <Navbar />
        </div>
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/demo" element={<SharedSecretDemo />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;









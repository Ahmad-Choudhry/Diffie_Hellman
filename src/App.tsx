import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import SharedSecretDemo from './pages/SharedSecretDemo';
import WhatIsDH from "./pages/WhatIsDH";
import SecurityRisks from "./pages/SecurityRisks";
import LearnMore from "./pages/LearnMore";

// Wrap routes in a component that uses useLocation
function AppRoutes() {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/demo" element={<SharedSecretDemo key={location.pathname} />} />
      <Route path="/what-is-dh" element={<WhatIsDH key={location.pathname} />} />
      <Route path="/security-risks" element={<SecurityRisks key={location.pathname} />} />
      <Route path="/learn-more" element={<LearnMore key={location.pathname} />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen w-screen overflow-x-hidden bg-gradient-to-br from-slate-900 to-gray-800 text-white">
        <div className="h-16 shrink-0">
          <Navbar />
        </div>
        <div className="flex-1 overflow-y-auto">
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

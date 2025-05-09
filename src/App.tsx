import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import SharedSecretDemo from './pages/SharedSecretDemo';
import WhatIsDH from "./pages/WhatIsDH";
import SecurityRisks from "./pages/SecurityRisks";
import LearnMore from "./pages/LearnMore";
import SharedSecretECDHDemo from './pages/SharedSecretECDHDemo';
import WhatIsECDH from './pages/WhatIsECDH';


// Wrap routes in a component that uses useLocation
function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/demo" element={<SharedSecretDemo/>} />
      <Route path="/ecdh" element={<SharedSecretECDHDemo/>} />
      <Route path="/what-is-dh" element={<WhatIsDH/>} />
      <Route path="/what-is-ecdh" element={<WhatIsECDH/>} />
      <Route path="/security-risks" element={<SecurityRisks/>} />
      <Route path="/learn-more" element={<LearnMore/>} />
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

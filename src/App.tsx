import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SharedSecretDemo from './pages/SharedSecretDemo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<SharedSecretDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

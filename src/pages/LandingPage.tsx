import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

    return (
      <main className="w-full h-full bg-gradient-to-br from-slate-900 to-gray-800 text-white flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4 text-center w-full">
          🔐 Diffie-Hellman
        </h1>
  
        <p className="text-lg text-center mb-10 w-full max-w-[90%]">
          A secure communication demo using Ed25519-based Diffie-Hellman key exchange between two AI agents.
        </p>
  
        <div className="flex flex-row flex-wrap justify-evenly items-stretch gap-10 w-full px-10">
          <div className="bg-slate-700 p-6 rounded-2xl shadow-lg flex-1 min-w-[300px] max-w-[500px] text-center">
            <h2 className="text-xl font-semibold mb-2">🤖 Agent A</h2>
            <p className="text-sm">Fetches live news & encrypts it using a shared key.</p>
          </div>
  
          <div className="text-4xl animate-pulse self-center">🔁</div>
  
          <div className="bg-slate-700 p-6 rounded-2xl shadow-lg flex-1 min-w-[300px] max-w-[500px] text-center">
            <h2 className="text-xl font-semibold mb-2">🧠 Agent B</h2>
            <p className="text-sm">Decrypts and validates the message with AI logic.</p>
          </div>
        </div>
  
        <button
          className="mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium transition"
          onClick={() => navigate('/demo')}
        >
          See Encryption in Action
        </button>
      </main>
    );
  }
  
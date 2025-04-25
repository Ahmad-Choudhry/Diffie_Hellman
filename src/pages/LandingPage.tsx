import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="w-full h-full bg-hexagon bg-gradient-to-br from-slate-900 to-gray-800 text-white flex flex-col justify-center items-center px-4 sm:px-6 overflow-x-auto">
      <h1 className="text-4xl font-bold mb-4 text-center w-full">
        🔐 Diffie-Hellman Key Exchange
      </h1>

      <p className="text-lg text-center mb-10 w-full max-w-[90%]">
        A visual demo showing how Alice and Bob securely generate a shared secret over a public channel using the Diffie-Hellman protocol.
      </p>

      <div className="flex flex-row flex-wrap justify-evenly items-stretch gap-10 w-full px-10 max-w-7xl">
        <div className="bg-slate-700 p-6 rounded-2xl shadow-lg flex-1 min-w-[300px] max-w-[500px] text-center">
          <h2 className="text-xl font-semibold mb-2">👩 Alice</h2>
          <p className="text-sm">Chooses a private number and calculates a public key to share.</p>
        </div>

        <div className="text-4xl animate-pulse self-center">🔁</div>

        <div className="bg-slate-700 p-6 rounded-2xl shadow-lg flex-1 min-w-[300px] max-w-[500px] text-center">
          <h2 className="text-xl font-semibold mb-2">🧑‍💻 Bob</h2>
          <p className="text-sm">Does the same and uses Alice's public key to compute the shared secret.</p>
        </div>
      </div>

      <button
        className="mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium transition"
        onClick={() => navigate('/demo')}
      >
        Start the Demo
      </button>
    </main>
  );
}

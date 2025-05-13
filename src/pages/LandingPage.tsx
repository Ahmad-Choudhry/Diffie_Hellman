import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="w-full h-full bg-hexagon bg-gradient-to-br from-slate-900 to-gray-800 text-white flex flex-col justify-center items-center px-4 sm:px-6 overflow-x-auto">
      <h1 className="text-4xl font-bold mb-4 text-center w-full">
        🔐 Diffie-Hellman Key Exchange
      </h1>

      <p className="text-lg text-center mb-6 w-full max-w-[90%]">
        A visual demo showing how two parties — Alice and Bob — can securely establish a shared secret over an insecure public channel using the Diffie-Hellman protocol.
      </p>

      <p className="text-sm text-center mb-10 max-w-[90%] text-gray-300">
        If you're unfamiliar with the Diffie-Hellman or Elliptic Curve Diffie-Hellman (ECDH) protocols, we recommend starting with the{' '}
        <span
          className="text-blue-400 hover:underline cursor-pointer"
          onClick={() => navigate('/what-is-dh')}
        >
          What Is Diffie-Hellman?
        </span>{' '}
        page for a foundational understanding before exploring the demo.
      </p>

      <div className="flex flex-row flex-wrap justify-evenly items-stretch gap-10 w-full px-10 max-w-7xl">
        <div className="bg-slate-700 p-6 rounded-2xl shadow-lg flex-1 min-w-[300px] max-w-[500px] text-center">
          <h2 className="text-xl font-semibold mb-2">👩 Alice</h2>
          <p className="text-sm">
            Alice selects a secret private key and uses a common base and prime to compute her public key. She then sends this public key to Bob over a public channel.
          </p>
        </div>

        <div className="text-4xl animate-pulse self-center">🔁</div>

        <div className="bg-slate-700 p-6 rounded-2xl shadow-lg flex-1 min-w-[300px] max-w-[500px] text-center">
          <h2 className="text-xl font-semibold mb-2">🧑‍💻 Bob</h2>
          <p className="text-sm">
            Bob also picks a secret private key and generates his public key using the same shared base and prime. After receiving Alice’s public key, he combines it with his private key to compute the shared secret — which Alice will also compute on her side.
          </p>
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

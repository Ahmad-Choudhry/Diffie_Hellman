import { useState } from 'react';
import ColumnComponent from '../components/ColumnComponent';
import TitleHeader from '../components/TitleHeader';
import EllipticStepBar from '../components/EllipticStepBar';
import { Point } from '../math/ellipticCurve';

export default function SharedSecretECDHDemo() {
  const [privateA, setPrivateA] = useState('');
  const [privateB, setPrivateB] = useState('');
  const [publicA, setPublicA] = useState<Point | null>(null);
  const [publicB, setPublicB] = useState<Point | null>(null);
  const [sharedSecretA, setSharedSecretA] = useState<Point | null>(null);
  const [sharedSecretB, setSharedSecretB] = useState<Point | null>(null);
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const resetAll = () => {
    setPrivateA('');
    setPrivateB('');
    setPublicA(null);
    setPublicB(null);
    setSharedSecretA(null);
    setSharedSecretB(null);
  };

  return (
    <div className="w-full h-full bg-hexagon flex flex-col bg-gradient-to-br from-slate-900 to-gray-800 text-white px-4 sm:px-6 overflow-x-auto pb-6">
      <TitleHeader />

      {showDisclaimer && (
        <div className="relative bg-purple-900 text-purple-200 text-sm border border-purple-500 rounded-md px-4 py-3 max-w-3xl mx-auto mb-4">
          <div className="flex justify-between items-start">
            <p className="text-center w-full">
             ⚠️ This is an educational demo of Elliptic Curve Diffie-Hellman (ECDH) using the curve y² = x³ + 2x + 2 mod 17. This toy setup uses small primes for transparency, not real-world security.
            </p>
            <button
              onClick={() => setShowDisclaimer(false)}
              className="ml-2 text-purple-300 hover:text-white text-sm leading-none"
              aria-label="Close disclaimer"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-wrap w-full max-w-7xl px-4 sm:px-6 gap-4 h-[600px] items-stretch mx-auto">
        <div className="flex flex-nowrap flex-[3] gap-3 min-w-0 h-full shrink-0">
          {/* Alice */}
          <div className="flex-[1_1_0%] min-w-0 h-full">
            <ColumnComponent title="Alice">
              <div className="text-left text-sm font-mono overflow-x-auto whitespace-nowrap space-y-1 mb-4">
                <p>Private Key : <span className="text-red-400 font-semibold">{privateA || '-'}</span></p>
                <p>Shared Secret: <span className="text-red-400 font-semibold">{sharedSecretA ? JSON.stringify(sharedSecretA) : '-'}</span></p>
              </div>
            </ColumnComponent>
          </div>

          {/* Public Stream */}
          <div className="flex-[1_1_0%] min-w-0 h-full">
            <ColumnComponent title="Public Stream">
              <div className="text-left text-sm font-mono overflow-x-auto whitespace-nowrap space-y-1 mb-4">
                <p>Curve: <span className="text-green-400 font-semibold">y² ≡ x³ + 2x + 2 mod 17</span></p>
                <p>Base Point G: <span className="text-green-400 font-semibold">(5, 1)</span></p>
                <p>Public Alice: <span className="text-green-400 font-semibold">{publicA ? JSON.stringify(publicA) : '-'}</span></p>
                <p>Public Bob: <span className="text-green-400 font-semibold"> {publicB ? JSON.stringify(publicB) : '-'}</span></p>
              </div>
            </ColumnComponent>
          </div>

          {/* Bob */}
          <div className="flex-[1_1_0%] min-w-0 h-full">
            <ColumnComponent title="Bob">
              <div className="text-left text-sm font-mono overflow-x-auto whitespace-nowrap space-y-1 mb-4">
                <p>Private Key: <span className="text-red-400 font-semibold">{privateB || '-'}</span></p>
                <p>Shared Secret: <span className="text-red-400 font-semibold">{sharedSecretB ? JSON.stringify(sharedSecretB) : '-'}</span></p>
              </div>
            </ColumnComponent>
          </div>
        </div>

        {/* Step Bar */}
        <div className="basis-full sm:basis-[320px] min-w-[100px] h-full">
          <EllipticStepBar
            privateA={privateA}
            privateB={privateB}
            setPrivateA={setPrivateA}
            setPrivateB={setPrivateB}
            publicA={publicA}
            publicB={publicB}
            setPublicA={setPublicA}
            setPublicB={setPublicB}
            sharedSecretA={sharedSecretA}
            sharedSecretB={sharedSecretB}
            setSharedSecretA={setSharedSecretA}
            setSharedSecretB={setSharedSecretB}
            resetAll={resetAll}
          />
        </div>
      </div>
    </div>
  );
}

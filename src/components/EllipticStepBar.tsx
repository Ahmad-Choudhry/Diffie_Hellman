import React, { useState } from "react";
import { runECDH } from "../math/ellipticCurve";
import InfoTooltip from "./InfoToolip";
import { Point } from "../math/ellipticCurve";

interface EllipticStepBarProps {
  privateA: string;
  privateB: string;
  setPrivateA: (value: string) => void;
  setPrivateB: (value: string) => void;
  publicA: Point | null;
  publicB: Point | null;
  setPublicA: (value: Point) => void;
  setPublicB: (value: Point) => void;
  sharedSecretA: Point | null;
  sharedSecretB: Point | null;
  setSharedSecretA: (value: Point) => void;
  setSharedSecretB: (value: Point) => void;
  resetAll: () => void;
}

const EllipticStepBar: React.FC<EllipticStepBarProps> = ({
  privateA,
  privateB,
  setPrivateA,
  setPrivateB,
  publicA,
  publicB,
  setPublicA,
  setPublicB,
  sharedSecretA,
  sharedSecretB,
  setSharedSecretA,
  setSharedSecretB,
  resetAll,
}) => {
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const defaultA = "4";
  const defaultB = "3";

  const isInteger = (value: string) => /^\d+$/.test(value);

  const goNext = () => {
    if (step === 1) {
      if (!isInteger(privateA) || !isInteger(privateB)) {
        setError("Private keys must be valid integers.");
        return;
      }
      setError("");
    }

    setStep((prev) => Math.min(prev + 1, 3));
  };

  const goBack = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="h-full min-w-[100px] w-full sm:w-[320px] bg-[#0a0f1c] p-6 rounded-2xl shadow-lg text-white flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-extrabold mb-4 text-center text-purple-400">
          Step {step}
        </h2>

        {step === 1 && (
          <div className="space-y-4">
            <p className="text-sm">
              Enter private keys for Alice and Bob.
              <InfoTooltip text="Private keys are secret integers used to multiply the base point on the elliptic curve." />
            </p>

            <input
              type="text"
              placeholder="Private key for Alice"
              value={privateA}
              onChange={(e) => setPrivateA(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-black text-white placeholder:text-gray-400 outline-none border border-white focus:border-purple-800 focus:ring-2 focus:ring-purple-800 transition-all"
            />
            <input
              type="text"
              placeholder="Private key for Bob"
              value={privateB}
              onChange={(e) => setPrivateB(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-black text-white placeholder:text-gray-400 outline-none border border-white focus:border-purple-800 focus:ring-2 focus:ring-purple-800 transition-all"
            />

            <button
              className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600 text-sm"
              onClick={() => {
                setPrivateA(defaultA);
                setPrivateB(defaultB);
                setError("");
              }}
            >
              Use default values
            </button>
            {error && <p className="text-red-300 text-sm">{error}</p>}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 text-sm">
            <p>Compute public keys by scalar multiplying the base point G = (5, 1).</p>

            <button
              className="bg-indigo-600 hover:bg-indigo-500 px-3 py-1 rounded"
              onClick={() => {
                try {
                  const result = runECDH(parseInt(privateA), parseInt(privateB));
                  setPublicA(result.A);
                } catch {
                  alert("Invalid private key for Alice");
                }
              }}
            >
              Calculate Public Alice
            </button>

            {publicA && (
              <div className="bg-indigo-700 p-2 rounded text-xs">
                Public Key A: <strong>({publicA[0]}, {publicA[1]})</strong>
              </div>
            )}

            <button
              className="bg-green-600 hover:bg-green-500 px-3 py-1 rounded"
              onClick={() => {
                try {
                  const result = runECDH(parseInt(privateA), parseInt(privateB));
                  setPublicB(result.B);
                } catch {
                  alert("Invalid private key for Bob");
                }
              }}
            >
              Calculate Public Bob
            </button>

            {publicB && (
              <div className="bg-green-700 p-2 rounded text-xs">
                Public Key B: <strong>({publicB[0]}, {publicB[1]})</strong>
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 text-sm">
            <p>Compute shared secrets by multiplying the peer’s public key with own private key.</p>

            <button
              className="bg-indigo-600 hover:bg-indigo-500 px-3 py-1 rounded"
              onClick={() => {
                try {
                  const result = runECDH(parseInt(privateA), parseInt(privateB));
                  setSharedSecretA(result.shared1);
                } catch {
                  alert("Error computing shared secret for Alice");
                }
              }}
            >
              Compute Shared Secret for Alice
            </button>

            {sharedSecretA && (
              <div className="bg-indigo-700 p-2 rounded text-xs">
                Shared A: <strong>({sharedSecretA[0]}, {sharedSecretA[1]})</strong>
              </div>
            )}

            <button
              className="bg-green-600 hover:bg-green-500 px-3 py-1 rounded"
              onClick={() => {
                try {
                  const result = runECDH(parseInt(privateA), parseInt(privateB));
                  setSharedSecretB(result.shared2);
                } catch {
                  alert("Error computing shared secret for Bob");
                }
              }}
            >
              Compute Shared Secret for Bob
            </button>

            {sharedSecretB && (
              <div className="bg-green-700 p-2 rounded text-xs">
                Shared B: <strong>({sharedSecretB[0]}, {sharedSecretB[1]})</strong>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex justify-between">
          <button
            onClick={goBack}
            disabled={step === 1}
            className="bg-gray-600 px-3 py-1 rounded disabled:opacity-40"
          >
            Back
          </button>
          <button
            onClick={goNext}
            disabled={step === 3}
            className="bg-purple-600 px-3 py-1 rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>

        <button
          onClick={() => {
            resetAll();
            setStep(1);
            setError("");
          }}
          className="w-full bg-red-700 hover:bg-red-600 px-3 py-1 rounded"
        >
          Restart Demo
        </button>
      </div>
    </div>
  );
};

export default EllipticStepBar;

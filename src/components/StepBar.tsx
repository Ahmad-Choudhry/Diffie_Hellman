import React, { useState } from "react";
import { modPow } from "../lib/dhMath";
import InfoTooltip from "./InfoToolip";

interface StepBarProps {
    p: string;
    g: string;
    setP: (value: string) => void;
    setG: (value: string) => void;
    privateA: string;
    privateB: string;
    setPrivateA: (value: string) => void;
    setPrivateB: (value: string) => void;
    publicA: string;
    publicB: string;
    setPublicA: (value: string) => void;
    setPublicB: (value: string) => void;
    sharedSecretA: string;
    sharedSecretB: string;
    setSharedSecretA: (value: string) => void;
    setSharedSecretB: (value: string) => void;
    resetAll: () => void;
  }

const StepBar: React.FC<StepBarProps> = ({ p, g, setP, setG, privateA, privateB, setPrivateA, setPrivateB, publicA, publicB, setPublicA, setPublicB, sharedSecretA, sharedSecretB, setSharedSecretA, setSharedSecretB, resetAll }) => {
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const defaultP = "23";
  const defaultG = "5";
  const defaultA = "4";
  const defaultB = "3";


  const isInteger = (value: string) => /^\d+$/.test(value);

  const goNext = () => {
    if (step === 1) {
      if (!isInteger(p) || !isInteger(g)) {
        setError("Both p and g must be valid positive integers.");
        return;
      }
      setError(""); // clear errors
    }

    // inside goNext()
    if (step === 2) {
        if (!isInteger(privateA) || !isInteger(privateB)) {
        setError("Private values for A and B must be positive integers.");
        return;
        }
        setError("");
    }

    if (step === 3) {
        if (!isInteger(publicA) || !isInteger(publicB)) {
          setError("You must compute both Public Alice and Public Bob before continuing.");
          return;
        }
        setError("");
      }

        setStep((prev) => Math.min(prev + 1, 4));
    };

  const goBack = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="h-full min-w-[100px] w-full sm:w-[320px] bg-[#0a0f1c] p-6 rounded-2xl shadow-lg text-white flex flex-col justify-between">
      <div>
      <h2 className="text-3xl font-extrabold mb-4 text-center text-blue-500">
        Step {step}
      </h2>

        {step === 1 && (
          <div className="space-y-4">
            <p className="text-sm">
                Select prime number <strong>p</strong>
                <InfoTooltip 
                    text="A prime number used as the modulus in Diffie-Hellman." 
                    link="https://en.wikipedia.org/wiki/Prime_number" 
                />
                <br />
                and generator <strong>g</strong>
                <InfoTooltip 
                    text="A number whose powers modulo p generate all numbers from 1 to p-1." 
                    link="https://en.wikipedia.org/wiki/Primitive_root_modulo_n" 
                />
                <br />
            </p>

            <input
              type="text"
              placeholder="Enter p (e.g. 23)"
              value={p}
              onChange={(e) => setP(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-black text-white placeholder:text-gray-400 outline-none border border-white focus:border-blue-800 focus:ring-2 focus:ring-blue-800 transition-all"
            />
            <input
              type="text"
              placeholder="Enter g (e.g. 5)"
              value={g}
              onChange={(e) => setG(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-black text-white placeholder:text-gray-400 outline-none border border-white focus:border-blue-800 focus:ring-2 focus:ring-blue-800 transition-all"
            />
            <button
              className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600 text-sm"
              onClick={() => {
                setP(defaultP);
                setG(defaultG);
                setError("");
              }}
            >
              Use default values
            </button>
            {error && <p className="text-red-300 text-sm">{error}</p>}
          </div>
        )}

        {step === 2 && (
            <div className="space-y-4">
                <p className="text-sm">Enter private keys for Alice and Bob.</p>
                <input
                    type="text"
                    placeholder="Private key for Alice"
                    value={privateA}
                    onChange={(e) => setPrivateA(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-black text-white placeholder:text-gray-400 outline-none border border-white focus:border-blue-800 focus:ring-2 focus:ring-blue-800 transition-all"
                />
                <input
                    type="text"
                    placeholder="Private key for Bob"
                    value={privateB}
                    onChange={(e) => setPrivateB(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-black text-white placeholder:text-gray-400 outline-none border border-white focus:border-blue-800 focus:ring-2 focus:ring-blue-800 transition-all"
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


        {step === 3 && (
            <div className="space-y-4 text-sm">
                <p>Compute public keys using:</p>
                <p><strong>Public Alice</strong> = g<sup>a</sup> mod p</p>
                <p><strong>Public Bob</strong> = g<sup>b</sup> mod p</p>

                <button
                    className="bg-indigo-600 hover:bg-indigo-500 px-3 py-1 rounded"
                    onClick={() => {
                        try {
                        const result = modPow(BigInt(g), BigInt(privateA), BigInt(p));
                        setPublicA(result.toString());
                        } catch {
                        alert("Invalid input for Public Alice");
                        }
                    }}
                >
                    Calculate Public Alice
                </button>

                {publicA && (
                    <div className="bg-indigo-700 p-2 rounded max-h-24 overflow-auto text-sm break-words">
                        <p className="whitespace-pre-wrap">
                        {g}<sup>{privateA}</sup> mod {p} = <strong>{publicA}</strong>
                        </p>
                    </div>
                )}

                <button
                    className="bg-green-600 hover:bg-green-500 px-3 py-1 rounded"
                    onClick={() => {
                        try {
                        const result = modPow(BigInt(g), BigInt(privateB), BigInt(p));
                        setPublicB(result.toString());
                        } catch {
                        alert("Invalid input for Public Bob");
                        }
                    }}
                >
                    Calculate Public Bob
                </button>

                {publicB && (
                    <div className="bg-green-700 p-2 rounded max-h-24 overflow-auto text-sm break-words">
                        <p className="whitespace-pre-wrap">
                        {g}<sup>{privateB}</sup> mod {p} = <strong>{publicB}</strong>
                        </p>
                    </div>
                )}
                {error && <p className="text-red-300 text-sm">{error}</p>}
            </div>
        )}

        {step === 4 && (
            <div className="space-y-4 text-sm">
                <p>Compute the shared secret key:</p>
                <p><strong>For A:</strong> (Public B)<sup>a</sup> mod p</p>
                <p><strong>For B:</strong> (Public A)<sup>b</sup> mod p</p>

                <button
                    className="bg-indigo-600 hover:bg-indigo-500 px-3 py-1 rounded"
                    onClick={() => {
                        try {
                        const result = modPow(BigInt(publicB), BigInt(privateA), BigInt(p));
                        setSharedSecretA(result.toString());
                        } catch {
                        alert("Invalid input for Shared Secret Alice");
                        }
                    }}
                >
                    Compute Shared Secret for Alice
                </button>

                {sharedSecretA && (
                    <div className="bg-indigo-700 p-2 rounded max-h-24 overflow-auto text-sm break-words">
                        <p className="whitespace-pre-wrap">
                        ({publicB})<sup>{privateA}</sup> mod {p} = <strong>{sharedSecretA}</strong>
                        </p>
                    </div>
                )}

                <button
                    className="bg-green-600 hover:bg-green-500 px-3 py-1 rounded"
                    onClick={() => {
                        try {
                        const result = modPow(BigInt(publicA), BigInt(privateB), BigInt(p));
                        setSharedSecretB(result.toString());
                        } catch {
                        alert("Invalid input for Shared Secret Bob");
                        }
                    }}
                >
                    Compute Shared Secret for Bob
                </button>

                {sharedSecretB && (
                    <div className="bg-green-700 p-2 rounded max-h-24 overflow-auto text-sm break-words">
                        <p className="whitespace-pre-wrap">
                        ({publicA})<sup>{privateB}</sup> mod {p} = <strong>{sharedSecretB}</strong>
                        </p>
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
                disabled={step === 4}
                className="bg-green-600 px-3 py-1 rounded disabled:opacity-40"
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

export default StepBar;

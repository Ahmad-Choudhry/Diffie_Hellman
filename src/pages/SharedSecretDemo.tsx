import React, { useState } from 'react';
import ColumnComponent from '../components/ColumnComponent';
import StepBar from '../components/StepBar';
import TitleHeader from '../components/TitleHeader';

export default function SharedSecretDemo() {
  const [p, setP] = useState("");
  const [g, setG] = useState("");
  const [privateA, setPrivateA] = useState("");
  const [privateB, setPrivateB] = useState("");
  const [publicA, setPublicA] = useState("");
  const [publicB, setPublicB] = useState("");
  const [sharedSecretA, setSharedSecretA] = useState("");
  const [sharedSecretB, setSharedSecretB] = useState("");

  const resetAll = () => {
    setP("");
    setG("");
    setPrivateA("");
    setPrivateB("");
    setPublicA("");
    setPublicB("");
    setSharedSecretA("");
    setSharedSecretB("");
  };

  return (
    <div className="w-full h-full bg-hexagon flex flex-col bg-gradient-to-br from-slate-900 to-gray-800 text-white px-4 sm:px-6 overflow-x-auto">
        <TitleHeader />
      <div className="flex flex-wrap w-full max-w-7xl px-4 sm:px-6 gap-4 h-[600px] items-stretch mx-auto">
        <div className="flex flex-nowrap flex-[3] gap-3 min-w-0 h-full shrink-0">
          {/* Person A */}
          <div className="flex-[1_1_0%] min-w-0 h-full">
            <ColumnComponent title="Person A">
                <div className="text-left text-sm font-mono overflow-x-auto whitespace-nowrap space-y-1">
                    <p>Private Key: <span className="text-red-400 font-semibold">{privateA || "-"}</span></p>
                    <p>Shared Secret: <span className="text-red-400 font-semibold">{sharedSecretA || "-"}</span></p>
                </div>
            </ColumnComponent>
          </div>

          {/* Public Stream */}
          <div className="flex-[1_1_0%] min-w-0 h-full">
          <ColumnComponent title="Public Stream">
                <div className="text-left text-sm font-mono overflow-x-auto whitespace-nowrap space-y-1">
                    <p>p: <span className="text-green-400 font-semibold">{p || "-"}</span></p>
                    <p>g: <span className="text-green-400 font-semibold">{g || "-"}</span></p>
                    <p>Public A: <span className="text-green-400 font-semibold">{publicA || "-"}</span></p>
                    <p>Public B: <span className="text-green-400 font-semibold">{publicB || "-"}</span></p>
                </div>
          </ColumnComponent>
          </div>

          {/* Person B */}
          <div className="flex-[1_1_0%] min-w-0 h-full">
            <ColumnComponent title="Person B">
                <div className="text-left text-sm font-mono overflow-x-auto whitespace-nowrap space-y-1">
                    <p>Private Key: <span className="text-red-400 font-semibold">{privateB || "-"}</span></p>
                    <p>Shared Secret: <span className="text-red-400 font-semibold">{sharedSecretB || "-"}</span></p>
                </div>
            </ColumnComponent>
          </div>
        </div>

        {/* StepBar */}
        <div className="basis-full sm:basis-[320px] min-w-[100px] h-full">
        <StepBar
        p={p}
        g={g}
        setP={setP}
        setG={setG}
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

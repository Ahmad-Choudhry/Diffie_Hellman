import TopicHeader from "../components/TopicHeader";
import Description from "../components/Description";

const WhatIsDH = () => {
  return (
    <div className="w-full h-full bg-hexagon flex flex-col bg-gradient-to-br from-slate-900 to-gray-800 text-white px-4 sm:px-6 overflow-x-auto">
      <TopicHeader
        title="What is Diffie-Hellman?"
        subtitle="Understanding the foundations of secure key exchange over public channels."
        />
      <div className="flex justify-center py-6">
        <Description title="What is Diffie-Hellman?">
          <h3 className="text-green-400 font-semibold text-lg mb-2">Overview</h3>
          <p>
            The <span className="text-red-400 font-bold">Diffie-Hellman key exchange</span> is a foundational technique in cryptography that allows two parties to establish a <span className="text-red-400">shared secret</span> over an <span className="text-red-400">insecure channel</span>. Introduced in 1976 by <span className="text-red-400">Whitfield Diffie</span> and <span className="text-red-400">Martin Hellman</span>, it was the first practical method for establishing a <span className="text-red-400">public-key</span> agreement.
          </p>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">How It Works</h3>
          <p>
            The protocol relies on two numbers:
            <br />
            - A large <span className="text-red-400 font-semibold">prime number</span> <strong className="text-red-400">p</strong>
            <br />
            - A <span className="text-red-400 font-semibold">generator</span> <strong className="text-red-400">g</strong> (also called a primitive root modulo p)
          </p>
          <p className="mt-2">
            Each party selects a <span className="text-red-400">private key</span> (say, <strong className="text-red-400">a</strong> for Alice and <strong className="text-red-400">b</strong> for Bob), then computes their <span className="text-red-400">public values</span> using:
            <br />
            <strong className="text-red-400">A = g^a mod p</strong>
            <br />
            <strong className="text-red-400">B = g^b mod p</strong>
          </p>
          <p className="mt-2">
            They exchange their public values (<strong className="text-red-400">A</strong> and <strong className="text-red-400">B</strong>) over the insecure channel. Then, each party computes the <span className="text-red-400">shared secret</span> using:
            <br />
            Alice: <strong className="text-red-400">s = B^a mod p</strong>
            <br />
            Bob: <strong className="text-red-400">s = A^b mod p</strong>
          </p>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">Why It Works</h3>
          <p>
            Due to the properties of modular arithmetic, both parties arrive at the same shared secret:
            <br />
            <strong className="text-red-400">g^(ab) mod p = g^(ba) mod p</strong>
          </p>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">Security Foundation</h3>
          <p>
            The security of the Diffie-Hellman protocol is based on the hardness of the <span className="text-red-400">discrete logarithm problem</span>: given <strong className="text-red-400">g</strong>, <strong className="text-red-400">p</strong>, and <strong className="text-red-400">g^a mod p</strong>, it's computationally difficult to find <strong className="text-red-400">a</strong>.
          </p>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">What You See in the Demo</h3>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>
              You start by choosing <strong className="text-red-400">p</strong> and <strong className="text-red-400">g</strong>.
            </li>
            <li>
              You then pick private keys <strong className="text-red-400">a</strong> and <strong className="text-red-400">b</strong> for Alice and Bob.
            </li>
            <li>
              Public keys <strong className="text-red-400">A = g^a mod p</strong> and <strong className="text-red-400">B = g^b mod p</strong> are computed.
            </li>
            <li>
              Both compute the shared key using each other's public value:
              <br />
              <strong className="text-red-400">s = B^a mod p = A^b mod p</strong>
            </li>
            <li>
              This shared key is the basis for further encrypted communication.
            </li>
          </ul>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">Use Cases</h3>
          <p>
            Diffie-Hellman is widely used in secure communications like <strong className="text-red-400">TLS</strong>, <strong className="text-red-400">VPNs</strong>, and <strong className="text-red-400">SSH</strong>. Modern systems often use variations like <strong className="text-red-400">Elliptic-Curve Diffie-Hellman (ECDH)</strong> for better performance and security.
          </p>
        </Description>
      </div>
    </div>
  );
};

export default WhatIsDH;
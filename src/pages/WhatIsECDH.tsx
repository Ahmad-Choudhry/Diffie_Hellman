import TopicHeader from "../components/TopicHeader";
import Description from "../components/Description";

const WhatIsECDH = () => {
  return (
    <div className="w-full h-full bg-hexagon flex flex-col bg-gradient-to-br from-slate-900 to-gray-800 text-white px-4 sm:px-6 overflow-x-auto">
      <TopicHeader
        title="What is Elliptic-Curve Diffie-Hellman (ECDH)?"
        subtitle="A modern, efficient approach to secure key exchange using elliptic curves."
      />
      <div className="flex justify-center py-6">
        <Description title="Elliptic-Curve Diffie-Hellman (ECDH)">
          <h3 className="text-green-400 font-semibold text-lg mb-2">Overview</h3>
          <p>
            <span className="text-red-400 font-bold">ECDH</span> is the elliptic-curve variant of the classic Diffie-Hellman key exchange. Instead of using modular exponentiation over integers, it uses operations on points of an <span className="text-red-400">elliptic curve</span> defined over a finite field. This provides equivalent security with much smaller keys and faster computation.
          </p>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">How It Works</h3>
          <p>
            The parties agree on:
            <br />
            - An <span className="text-red-400 font-semibold">elliptic curve</span> equation: <strong className="text-red-400">y² = x³ + ax + b (mod p)</strong>
            <br />
            - A <span className="text-red-400 font-semibold">base point G</span> on the curve of known order.
          </p>
          <p className="mt-2">
            Each party selects a <span className="text-red-400">private key</span> (e.g. <strong className="text-red-400">a</strong> and <strong className="text-red-400">b</strong>), then computes their <span className="text-red-400">public key</span> as:
            <br />
            <strong className="text-red-400">A = a · G</strong>, <strong className="text-red-400">B = b · G</strong>
          </p>
          <p className="mt-2">
            After exchanging public points, both compute the shared secret using scalar multiplication:
            <br />
            Alice: <strong className="text-red-400">S = a · B</strong>
            <br />
            Bob: <strong className="text-red-400">S = b · A</strong>
          </p>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">Why It Works</h3>
          <p>
            Because scalar multiplication is associative and commutative over elliptic curves, both sides arrive at the same point:
            <br />
            <strong className="text-red-400">a · (b · G) = b · (a · G) = ab · G</strong>
          </p>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">Security Foundation</h3>
          <p>
            ECDH relies on the hardness of the <span className="text-red-400">Elliptic Curve Discrete Logarithm Problem (ECDLP)</span>. Given <strong className="text-red-400">G</strong> and <strong className="text-red-400">a · G</strong>, it’s computationally infeasible to recover <strong className="text-red-400">a</strong> even with powerful computers.
          </p>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">What You See in the Demo</h3>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>
              We use the toy curve <strong className="text-red-400">y² = x³ + 2x + 2 mod 17</strong> with base point <strong className="text-red-400">G = (5, 1)</strong>.
            </li>
            <li>
              You choose private keys for Alice and Bob.
            </li>
            <li>
              Their public keys <strong className="text-red-400">A = a · G</strong> and <strong className="text-red-400">B = b · G</strong> are computed.
            </li>
            <li>
              Each side computes the shared secret:
              <br />
              <strong className="text-red-400">S = a · B = b · A</strong>
            </li>
            <li>
              This shared point on the curve is the agreed-upon secret.
            </li>
          </ul>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">What is Scalar Multiplication on Elliptic Curves?</h3>
            <p>
            Scalar multiplication is the repeated addition of a point <strong className="text-red-400">G</strong> on an elliptic curve. It is written as:
            <br />
            <strong className="text-red-400">k · G = G + G + ... + G (k times)</strong>
            </p>
            <p className="mt-2">
            But unlike regular addition, "point addition" on an elliptic curve follows special geometric rules:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
            <li>
                To add two distinct points <strong className="text-red-400">P</strong> and <strong className="text-red-400">Q</strong>, draw a line through them. The third point of intersection on the curve is reflected over the x-axis to get <strong className="text-red-400">P + Q</strong>.
            </li>
            <li>
                To double a point <strong className="text-red-400">P</strong>, draw the tangent at <strong>P</strong>. The tangent intersects the curve at another point, which is then reflected to get <strong className="text-red-400">2P</strong>.
            </li>
            <li>
                To compute <strong className="text-red-400">k · G</strong>, use the efficient "double-and-add" method — like binary exponentiation but with curve point addition.
            </li>
            </ul>
            <p className="mt-2">
            For example, to compute <strong className="text-red-400">11 · G</strong>:
            </p>
            <p className="ml-4 font-mono text-sm text-purple-300">
            11 = 1011 (binary)
            <br />
            = G + 2G + 8G → combine these to get 11G
            </p>
            <p className="mt-2">
            Scalar multiplication is computationally efficient to perform, but very hard to reverse — making it perfect for cryptography.
            </p>


          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">Use Cases</h3>
          <p>
            ECDH is widely used in modern cryptographic systems like <strong className="text-red-400">TLS 1.3</strong>, <strong className="text-red-400">Signal Protocol</strong>, and <strong className="text-red-400">cryptographic wallets</strong>. Its efficiency and smaller key sizes make it ideal for secure communications on constrained devices.
          </p>
        </Description>
      </div>
    </div>
  );
};

export default WhatIsECDH;

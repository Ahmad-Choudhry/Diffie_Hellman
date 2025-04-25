import React from "react";
import TopicHeader from "../components/TopicHeader";
import Description from "../components/Description";

const LearnMore = () => {
  return (
    <div className="w-full h-full bg-hexagon flex flex-col bg-gradient-to-br from-slate-900 to-gray-800 text-white px-4 sm:px-6 overflow-x-auto">
      <TopicHeader
        title="Learn More"
        subtitle="Explore further resources on Diffie-Hellman and cryptographic security"
      />
      <div className="flex justify-center py-6">
        <Description title="Learn More">
          <h3 className="text-green-400 font-semibold text-lg mb-2">Documentation & Standards</h3>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>
              <a
                href="https://datatracker.ietf.org/doc/html/rfc3526"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                RFC 3526 – More Modular Exponentiation (MODP) Diffie-Hellman Groups
              </a>
            </li>
            <li>
              <a
                href="https://tools.ietf.org/html/rfc7919"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                RFC 7919 – Negotiated Finite Field Diffie-Hellman Ephemeral Parameters
              </a>
            </li>
            <li>
              <a
                href="https://csrc.nist.gov/publications/detail/sp/800-56a/rev-3/final"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                NIST SP 800-56A – Recommendation for Pair-Wise Key Establishment Schemes
              </a>
            </li>
          </ul>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">Articles & Explanations</h3>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>
              <a
                href="https://cryptobook.nakov.com/key-exchange/diffie-hellman-key-exchange"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nakov’s Cryptography Book – Diffie-Hellman Key Exchange
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Diffie–Hellman_key_exchange"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wikipedia – Diffie-Hellman Key Exchange
              </a>
            </li>
            <li>
              <a
                href="https://blog.cloudflare.com/a-relatively-easy-to-understand-primer-on-elliptic-curve-cryptography/"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cloudflare Blog – Primer on Elliptic Curve Cryptography
              </a>
            </li>
          </ul>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">Security Analysis & Case Studies</h3>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>
              <a
                href="https://weakdh.org/"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Logjam Attack – WeakDH.org
              </a>
            </li>
            <li>
              <a
                href="https://crypto.stackexchange.com/questions/142/what-is-a-man-in-the-middle-attack"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                StackExchange: What is a Man-in-the-Middle Attack?
              </a>
            </li>
            <li>
              <a
                href="https://www.imperva.com/learn/application-security/man-in-the-middle-attack-mitm/"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Imperva – What is a Man-in-the-Middle Attack?
              </a>
            </li>
          </ul>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">Interactive Tools & Simulations</h3>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>
              <a
                href="https://tools.keycdn.com/diffie-hellman"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                KeyCDN Tool – Online Diffie-Hellman Key Exchange Simulator
              </a>
            </li>
            <li>
              <a
                href="https://www.khanacademy.org/computing/computer-science/cryptography"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Khan Academy – Cryptography Course
              </a>
            </li>
            <li>
              <a
                href="https://cryptii.com/"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cryptii – Visual Crypto Tool for Modulo Math and Encoding
              </a>
            </li>
          </ul>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">Books & Research Papers</h3>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>
              <a
                href="https://www.schneier.com/books/applied-cryptography/"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Applied Cryptography by Bruce Schneier
              </a>
            </li>
            <li>
              <a
                href="https://cs.stanford.edu/people/eroberts/courses/soco/projects/public-key-cryptography/"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stanford – Introduction to Public-Key Cryptography (Student Project)
              </a>
            </li>
          </ul>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">Stay Updated</h3>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>
              <a
                href="https://www.schneier.com/"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schneier on Security – Security blog by Bruce Schneier
              </a>
            </li>
            <li>
              <a
                href="https://www.cryptographybuzz.com/"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                CryptographyBuzz – News, tutorials, and tools
              </a>
            </li>
          </ul>
        </Description>
      </div>
    </div>
  );
};

export default LearnMore;

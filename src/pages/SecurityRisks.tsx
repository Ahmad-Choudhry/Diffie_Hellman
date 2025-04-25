import React from "react";
import TopicHeader from "../components/TopicHeader";
import Description from "../components/Description";

const SecurityRisks = () => {
  return (
    <div className="w-full h-full bg-hexagon flex flex-col bg-gradient-to-br from-slate-900 to-gray-800 text-white px-4 sm:px-6 overflow-x-auto">
      <TopicHeader
        title="Security Risks in Diffie-Hellman"
        subtitle="Understanding the vulnerabilities and limitations in key exchange protocols"
      />
      <div className="flex justify-center py-6">
        <Description title="Security Risks in Diffie-Hellman">
          <h3 className="text-green-400 font-semibold text-lg mb-2">Overview</h3>
          <p>
            While the <span className="text-red-400 font-bold">Diffie-Hellman key exchange</span> is a groundbreaking technique for secure communication, it is not without risks. Understanding its vulnerabilities is essential for building resilient systems and preventing attacks.
          </p>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">1. Man-in-the-Middle (MITM) Attack</h3>
          <p>
            Since Diffie-Hellman does not authenticate users, an attacker can intercept and alter public keys during transmission. This allows the attacker to establish separate shared secrets with both parties and relay communications between them undetected.
          </p>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">2. Logjam Attack</h3>
          <p>
            The <span className="text-red-400">Logjam</span> attack exploits weak 512-bit or 1024-bit DH groups. Attackers can downgrade secure connections and solve the discrete logarithm problem using precomputation for these smaller primes.
          </p>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">3. Small Subgroup Attacks</h3>
          <p>
            If the prime <strong className="text-red-400">p</strong> is poorly chosen, attackers can force values into small subgroups to leak partial information about private keys. Properly selecting a safe prime (where <strong>p = 2q + 1</strong>, and <strong>q</strong> is also prime) helps mitigate this.
          </p>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">4. Side-Channel Attacks</h3>
          <p>
            These attacks target implementations, not the math itself. By measuring timing, power consumption, or electromagnetic leaks, attackers can infer private keys during DH computation.
          </p>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">5. Forward Secrecy Limitations</h3>
          <p>
            If the same private keys are reused across sessions, compromise of those keys allows past communications to be decrypted. Using <span className="text-red-400">ephemeral Diffie-Hellman (DHE)</span> ensures that each session uses fresh keys.
          </p>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">6. Implementation Errors</h3>
          <p>
            Cryptographic protocols are only as strong as their implementations. Bugs, insecure random number generators, or incorrect key validation can introduce critical vulnerabilities.
          </p>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">7. Quantum Threats</h3>
          <p>
            Quantum computers threaten DH security through <span className="text-red-400">Shor’s algorithm</span>, which could efficiently solve the discrete logarithm problem. Post-quantum cryptographic schemes are under development to address this risk.
          </p>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">Mitigation Strategies</h3>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Use strong, standardized prime groups (2048-bit or higher).</li>
            <li>Implement mutual authentication (e.g., digital signatures, certificates).</li>
            <li>Always use ephemeral keys for forward secrecy (DHE/ECDHE).</li>
            <li>Validate all received public parameters to prevent injection attacks.</li>
            <li>Use modern libraries and avoid writing your own crypto.</li>
          </ul>

          <h3 className="text-green-400 font-semibold text-lg mt-6 mb-2">Conclusion</h3>
          <p>
            While Diffie-Hellman is a cornerstone of secure communication, it must be implemented and deployed with caution. Understanding the risks allows developers and engineers to design robust systems that can withstand real-world threats.
          </p>
        </Description>
      </div>
    </div>
  );
};

export default SecurityRisks;

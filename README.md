# Diffie-Hellman Key Exchange Visualizer

An interactive visualizer that demonstrates the Diffie-Hellman Key Exchange protocol — a foundational concept in modern cryptography. This project is designed for learners, educators, and crypto-enthusiasts who want to understand how secure key exchange works under the hood.

**Live Demo:** [https://diffie-hellman-demo.vercel.app/](https://diffie-hellman-demo.vercel.app/)

## Features

- Step-by-step visualization of the Diffie-Hellman key exchange process
- Real-time generation of large prime numbers, private keys, public keys, and shared secrets
- Clean, intuitive interface with visual feedback for each step
- Inline explanations to help users understand the math
- Fully responsive design for desktop and mobile devices

## What is Diffie-Hellman?

The Diffie-Hellman key exchange is a cryptographic protocol that allows two parties to securely establish a shared secret over an insecure channel. The key idea is:

1. A large prime number (p) and a base (g) are selected and shared publicly.
2. Each party chooses a private secret number.
3. Each party computes and shares a corresponding public value using the formula `g^private mod p`.
4. By combining the other party's public value with their own private value, both compute the same shared secret without it ever being transmitted.

This shared secret can then be used to encrypt communications between the two parties.

## Tech Stack

- React (frontend framework)
- TypeScript (type safety)
- Tailwind CSS (styling)
- Vercel (deployment)
- JavaScript BigInt (handling large numbers)

## Getting Started

To run the project locally:

```bash
git clone https://github.com/yourusername/diffie-hellman-visualizer.git
cd diffie-hellman-visualizer
npm install
npm run dev

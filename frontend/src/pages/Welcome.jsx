// src/pages/Welcome.jsx
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white via-blue-100 to-white text-gray-800 ">
      <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-2">
          <ShieldCheck size={28} className="text-sky-300" />
          <h1 className="text-2xl font-bold tracking-wide">Military Asset Management</h1>
        </div>
        <Link
          to="/login"
          className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Login
        </Link>
      </nav>

      <main className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-900 drop-shadow-lg">
          Empowering Defense Through Technology
        </h1>
        <p className="text-lg max-w-3xl text-gray-700 mb-10">
          Our Military Asset Management System is designed to streamline the logistics of equipment,
          personnel, and operational readiness. Whether you're an administrator, a base commander,
          or part of the logistics team, our system ensures transparency, traceability, and control
          across all bases.
        </p>

        <img
          src="https://img.freepik.com/free-vector/security-concept-illustration_114360-458.jpg?w=740"
          alt="Military Technology"
          className="w-full max-w-2xl rounded-lg shadow-xl border-4 border-white"
        />
      </main>
    </div>
  );
};

export default Welcome;

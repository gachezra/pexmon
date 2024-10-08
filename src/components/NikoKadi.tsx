// import React from 'react';

const NikoKadi = () => {
  return (
    <div id="nikokadi" className="bg-[#000614] text-[#f5f9ff] p-10 w-full mx-auto shadow-lg">
      {/* Title and tagline for NikoKadi */}
      <h1 className="text-6xl font-extrabold mb-4">NikoKadi</h1>
      <h2 className="text-2xl font-medium mb-6 text-[#cfd8e3]">
        The First-Ever Online Experience of Kenya’s Favorite Card Game
      </h2>

      {/* Description of the game */}
      <p className="text-lg leading-relaxed mb-6 text-[#e2e8f0]">
        Dive into the ultimate fun and excitement with **NikoKadi**, where the traditional meets modern! Enjoy playing Kenya’s beloved card game like never before, with features that bring you closer to the real-life experience of sitting at a table with friends. Get ready for a thrilling blend of strategy, skill, and excitement, all in one place!
      </p>

      {/* Game Features */}
      <ul className="list-disc list-inside mb-8 text-[#d1d9e6]">
        <li className="text-lg mb-2">🗣️ <strong>Live Audio Feed</strong>: Communicate in real-time with friends and opponents, just like you’re at the table.</li>
        <li className="text-lg mb-2">💬 <strong>Live Chat Feed</strong>: Share strategies, banter, and connect with the community while you play.</li>
        <li className="text-lg mb-2">🎉 <strong>Unmatched Experience</strong>: Feel the thrill of every move, challenge your friends, and revel in an experience like no other.</li>
        <li className="text-lg mb-2">✨ <strong>Seamless Gameplay</strong>: Enjoy smooth, uninterrupted gameplay with cutting-edge technology for a flawless experience.</li>
        <li className="text-lg mb-2">📱 <strong>Multi-Device Support</strong>: Play anywhere, anytime—whether on your phone, tablet, or desktop.</li>
      </ul>

      {/* Call-to-action button */}
      <a
        href="https://kadi.pexmon.one"
        className="bg-transparent border border-[#001D61] text-gray-300 hover:bg-gray-300 hover:text-[#001D61] font-semibold py-3 px-6 rounded-lg transition duration-300"
      >
        Play NikoKadi
      </a>
    </div>
  );
};

export default NikoKadi;

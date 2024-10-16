// import React from 'react';

const VarsityRank = () => {
  return (
    <div id="varsityrank" className="bg-light-cream text-brown p-10 w-full mx-auto shadow-lg">
      {/* Title with the VarsityRank name */}
      <h1 className="text-4xl font-extrabold mb-4">VarsityRank</h1>
      {/* Tagline */}
      <h2 className="text-2xl font-medium mb-6 text-cream">Your Guide to Choosing the Right University</h2>

      {/* Description of the platform */}
      <p className="text-lg leading-relaxed mb-6 text-brown">
        Welcome to VarsityRank, the platform designed to help students make informed decisions about their university education. Here, you can rate and review your university, engage with other students, and access a wealth of information.
      </p>

      {/* Features list */}
      <ul className="list-disc list-inside mb-6">
        <li className="text-lg mb-2">🔑 <strong>Login with School Email</strong>: Secure access to rate and review your university.</li>
        <li className="text-lg mb-2">📝 <strong>Rate and Review</strong>: Share your experiences regarding cost of living, housing, academics, and more.</li>
        <li className="text-lg mb-2">💬 <strong>University Forums</strong>: Participate in discussions specific to your university branch.</li>
        <li className="text-lg mb-2">📊 <strong>University Reviews</strong>: Browse reviews of various universities to help you make informed choices.</li>
        <li className="text-lg mb-2">📸 <strong>Photo Gallery</strong>: View images of universities to get a feel for the campus life.</li>
        <li className="text-lg mb-2">🔍 <strong>University Comparison</strong>: Compare universities based on reviews, ratings, and features.</li>
        <li className="text-lg mb-2">👤 <strong>User Profiles</strong>: Create profiles to track your reviews and contributions.</li>
      </ul>

      {/* Call-to-action button */}
      <a href="https://varsityrank.pexmon.one" className="bg-transparent text-brown border border-brown hover:bg-gray-300 font-semibold py-2 px-4 rounded-lg transition duration-300">
        Visit VarsityRank
      </a>
    </div>
  );
};

export default VarsityRank;

// import React from 'react';

const EventKick = () => {
    return (
        <div id="eventkick" className="bg-[#1e1e36] text-white p-10 max-w-full mx-auto shadow-lg">
        <h1 className="font-montserrat text-6xl font-extrabold mb-4">EventKick</h1>

        <h2 className="text-2xl font-medium mb-6 text-gray-300">Revolutionizing Event Planning and Management</h2>

        <p className="text-lg leading-relaxed mb-6 text-gray-200">
            Are you an event planner looking to reach a wider audience? Or perhaps you're looking for a seamless way to manage your events and tickets? EventKick is the perfect solution for you! Our platform offers everything you need to host successful events, analyze audience engagement, sell tickets, and more.
        </p>

        <ul className="list-disc list-inside mb-6">
            <li className="text-lg mb-2">📅 <strong>Post Events</strong>: Easily list and showcase your upcoming events.</li>
            <li className="text-lg mb-2">📈 <strong>Analytics</strong>: Get insights on how people are interacting with your events.</li>
            <li className="text-lg mb-2">🎟️ <strong>Sell Tickets</strong>: Manage ticket sales and track attendance effortlessly.</li>
            <li className="text-lg mb-2">💬 <strong>Event Forums</strong>: Create forums for event discussions and feedback.</li>
            <li className="text-lg mb-2">⭐ <strong>Event Ratings</strong>: Collect ratings and reviews after your events.</li>
        </ul>

        <a href="https://eventkick.ke" className="bg-transparent text-indigo-600 border border-indigo-600 hover:bg-opacity-10 hover:text-white hover:bg-gray-300 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            Visit EventKick
        </a>
        </div>
    );
};

export default EventKick;
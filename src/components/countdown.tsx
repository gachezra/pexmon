import { useState, useEffect } from 'react';

const CountDown = () => {
  // Set the target end date (May 21st)
  const targetDate = new Date('May 21, 2024 00:00:00').getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Calculate time remaining function
  function calculateTimeRemaining() {
    const now = new Date().getTime();
    return targetDate - now;
  }

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(countdownTimer);
  }, []);

  // Format time function
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div className="bg-black text-white py-8 px-6 sm:items-center sm:justify-center">
      <div className="sm:text-center sm:mb-4">
        <h1 className="text-2xl lg:font-bold mt-20 sm:mb-10">Something big is coming soon!</h1>
      </div>
      <div className="flex flex-wrap my-20 justify-center gap-4 text-xl">
        <div className="text-center">
          <p className="lg:font-semibold">Days</p>
          <p className="text-4xl sm:text-2xl">{formatTime(days)}</p>
        </div>
        <div className="text-center">
          <p className="lg:font-semibold">Hours</p>
          <p className="text-4xl sm:text-2xl">{formatTime(hours)}</p>
        </div>
        <div className="text-center">
          <p className="lg:font-semibold">Minutes</p>
          <p className="text-4xl sm:text-2xl">{formatTime(minutes)}</p>
        </div>
        <div className="text-center">
          <p className="lg:font-semibold">Seconds</p>
          <p className="text-4xl sm:text-2xl">{formatTime(seconds)}</p>
        </div>
      </div>
    </div>
  );
};

export default CountDown;

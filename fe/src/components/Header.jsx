import React, { useState, useEffect } from 'react';

const Header = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleString('vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setCurrentTime(formattedTime);
    };

    updateTime(); // Set initial time
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <header className="h-14 border-b bg-white flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <div className="font-bold text-indigo-700">School System</div>
        <div className="text-sm text-gray-500">{currentTime}</div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-sm text-gray-500">Admin</div>
        <button className="bg-orange-500 text-white px-3 py-1 rounded">ADMIN</button>
      </div>
    </header>
  );
};

export default Header;
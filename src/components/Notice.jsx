import React from 'react';

const NotificationBar = ({ message }) => {
  return (
    <>
    <div className="mb-5 mt-5 bg-gray-200 text-red-500 max-w-5xl font-bold text-l text-center">
      {message}
    </div>
    </>
  );
};

export default NotificationBar;
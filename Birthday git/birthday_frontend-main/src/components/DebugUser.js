import React from 'react';
import { useSelector } from 'react-redux';

const DebugUser = () => {
  const user = useSelector((state) => state.user.userInfo);

  return (
    <div className="container mt-5">
      <h2>Debug User Information</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default DebugUser;

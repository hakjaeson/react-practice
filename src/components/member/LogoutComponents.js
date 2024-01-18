import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../slices/loginSlice';

const initState = {
  email: '',
  pw: '',
};
const LogoutComponents = () => {
  const [logoutParam, setLogoutParam] = useState(initState);
  const handleChange = e => {
    logoutParam[e.target.name] = e.target.value;
    setLogoutParam({ ...logoutParam });
  };
  const dispath = useDispatch();
  const handleClick = e => {
    dispath(logout(logoutParam));
  };
  return (
    <div>
      <button onClick={handleClick}>로그아웃할려고요?</button>
    </div>
  );
};

export default LogoutComponents;

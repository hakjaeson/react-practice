import React, { useState } from 'react';
import LoginComponents from '../../components/member/LoginComponents';
import LogoutComponents from '../../components/member/LogoutComponents';

const initState = {
  email: '',
  pw: '',
};
const LogoutPage = () => {
  return (
    <div>
      진짜 로그아웃할꺼임?
      <LogoutComponents />
    </div>
  );
};

export default LogoutPage;

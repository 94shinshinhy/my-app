import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Login from '../components/login/Login';

const LoginPage = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(params);
  console.log(location);
  console.log(navigate);

  return (
    <div>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate('/')}>홈으로</button>
      <Login />
    </div>
  );
};

export default LoginPage;

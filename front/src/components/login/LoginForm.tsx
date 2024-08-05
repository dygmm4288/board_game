import { ChangeEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AuthBtn from "./AuthBtn";

type LoginType = {
  username: string;
  password: string;
  passwordConfirm: string;
}
const LoginForm = () => {
  const [{username, password, passwordConfirm}, setLoginFormData] = useState<LoginType>({
    username:'',
    password: '',
    passwordConfirm: '',
  });
  const [isLoginMode, setLoginMode] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('login'))  setLoginMode(true);
  },[location.pathname]);

  const handleChangeValue = (type: keyof LoginType) => (e:ChangeEvent<HTMLInputElement>) => {
    setLoginFormData(prev => ({...prev, [type]: e.target.value}));
  };


  return <form>
    <input id="username" type="text" value={username} onChange={handleChangeValue('username')}/>
    <input id="password" type='password' value={password} onChange={handleChangeValue('password')}/>
    {!isLoginMode && <input id="password-confirm" type='password' value={passwordConfirm} onChange={handleChangeValue('passwordConfirm')}/>}
    <AuthBtn isLoginMode={isLoginMode}/>
  </form>
};

export default LoginForm;
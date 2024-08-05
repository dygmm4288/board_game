import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AuthBtn from "./ui/AuthBtn";
import Input from "./ui/Input";

type LoginType = {
  username: string;
  password: string;
  passwordConfirm: string;
}
const LoginForm = () => {
  const [loginFormData, setLoginFormData] = useState<LoginType>({
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

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    console.log(loginFormData);
  };


  return <form onSubmit={handleSubmit}>
    <Input type="text" id="username" onChange={handleChangeValue('username')}/>
    <Input type="password" id="password" onChange={handleChangeValue('password')}/>
    {!isLoginMode && <Input id="password-confirm" type='password'  onChange={handleChangeValue('passwordConfirm')}/>}
    <AuthBtn isLoginMode={isLoginMode}/>
  </form>
};

export default LoginForm;
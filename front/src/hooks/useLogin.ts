import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type LoginType = {
  username: string;
  password: string;
  passwordConfirm: string;
}

const useLogin = () => {
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

  return {
    isLoginMode,
    handleChangeValue,
    handleSubmit
  }
};

export default useLogin;
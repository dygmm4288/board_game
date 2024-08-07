import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import authApi, { LoginType } from "../api/auth";
import useStorage, { AUTH } from "./useStorage";

const useLogin = () => {
  const [loginFormData, setLoginFormData] = useState<LoginType>({
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const { setStorage } = useStorage();
  const [isLoginMode, setLoginMode] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("login")) setLoginMode(true);
  }, [location.pathname]);

  const handleChangeValue =
    (type: keyof LoginType) => (e: ChangeEvent<HTMLInputElement>) => {
      setLoginFormData((prev) => ({ ...prev, [type]: e.target.value }));
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    authApi
      .login(loginFormData)
      .then((res) => {
        const data = res.data;
        setStorage(AUTH, data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return {
    isLoginMode,
    handleChangeValue,
    handleSubmit,
  };
};

export default useLogin;

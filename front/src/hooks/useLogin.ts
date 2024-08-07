import { AxiosError } from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import authApi, { SignupType } from "../api/auth";
import useStorage, { AUTH } from "./useStorage";

const useLogin = () => {
  const [loginFormData, setLoginFormData] = useState<SignupType>({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const { setStorage } = useStorage();

  const [isLoginMode, setLoginMode] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("login")) setLoginMode(true);
  }, [location.pathname]);

  const handleChangeValue =
    (type: keyof SignupType) => (e: ChangeEvent<HTMLInputElement>) => {
      setLoginFormData((prev) => ({ ...prev, [type]: e.target.value }));
    };

  const resetData = () =>
    setLoginFormData({ password: "", passwordConfirm: "", username: "" });

  const login = () => {
    return authApi
      .login({
        username: loginFormData.username,
        password: loginFormData.password,
      })
      .then((res) => {
        resetData();
        setStorage(AUTH, res.data);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const signup = () => {
    return authApi
      .regist(loginFormData)
      .then(() => {
        resetData();
        navigate("/login");
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoginMode) {
      login();
      return;
    }

    signup();
  };

  return {
    isLoginMode,
    handleChangeValue,
    handleSubmit,
  };
};

export default useLogin;

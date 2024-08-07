import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import authApi, { LoginType, SignupType } from "../api/auth";
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

  const { mutate: login, error: loginError } = useMutation({
    mutationFn(data: LoginType) {
      return authApi.login({
        username: data.username,
        password: data.password,
      });
    },
    onSuccess(res) {
      setStorage(AUTH, res.data);
      navigate("/");
    },
    onSettled() {
      resetData();
    },
  });

  const { mutate: signup, error: signupError } = useMutation({
    mutationFn: (data: SignupType) => authApi.regist(data),
    onSuccess() {
      navigate("/login");
    },
    onSettled() {
      resetData();
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoginMode) {
      login(loginFormData);
      return;
    }

    signup(loginFormData);
  };

  return {
    isLoginMode,
    handleChangeValue,
    handleSubmit,
    signupError,
    loginError,
  };
};

export default useLogin;

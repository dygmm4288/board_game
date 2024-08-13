import { useMutation } from "@tanstack/react-query";
import _ from "lodash";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import authApi, { LoginType, SignupType } from "../api/auth";
import useAuth from "../zustand/auth";

const useLogin = () => {
  const [loginFormData, setLoginFormData] = useState<SignupType>({
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const { login: loginZustand } = useAuth();
  const [isValid, setValid] = useState(false);

  const [isLoginMode, setLoginMode] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("login")) setLoginMode(true);
  }, [location.pathname]);

  useEffect(() => {
    const keys = new Set(Object.keys(loginFormData));

    if (isLoginMode) keys.delete("passwordConfirm");
    const getValue = (key: string) => _.get(loginFormData, key);
    const checkValid = (value: unknown) =>
      !_.isNull(value) && !_.isUndefined(value) && !_.isEmpty(value);

    setValid(Array.from(keys).every((key) => checkValid(getValue(key))));
  }, [loginFormData, isLoginMode]);

  //-----------------------------
  // relate state...
  //-----------------------------

  const resetData = () =>
    setLoginFormData({ password: "", passwordConfirm: "", username: "" });

  //-----------------------------
  // event handlers...
  //-----------------------------
  const handleChangeValue =
    (type: keyof SignupType) => (e: ChangeEvent<HTMLInputElement>) => {
      setLoginFormData((prev) => ({ ...prev, [type]: e.target.value }));
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoginMode) {
      login(loginFormData);
      return;
    }

    signup(loginFormData);
  };

  //-----------------------------
  // mutations...
  //-----------------------------
  const { mutate: login, error: loginError } = useMutation({
    mutationFn(data: LoginType) {
      return authApi.login({
        username: data.username,
        password: data.password,
      });
    },
    onSuccess(res) {
      loginZustand(res.data);
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

  return {
    loginFormData,
    isLoginMode,
    handleChangeValue,
    handleSubmit,
    signupError,
    loginError,
    isValid,
  };
};

export default useLogin;

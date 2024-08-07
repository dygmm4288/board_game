import axios, { toFormData } from "axios";

const authInstance = axios.create({
  baseURL: "http://localhost:8000/api/auth",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export type SignupType = {
  username: string;
  password: string;
  passwordConfirm: string;
};

export type LoginType = Omit<SignupType, "passwordConfirm">;

export type Token = {
  access_token: string;
  token_type: string;
  username: string;
};

const login = (dict: LoginType) => {
  const formData = toFormData(dict);
  return authInstance.post<Token>("/login", formData);
};

const regist = (dict: SignupType) => {
  const formData = toFormData(dict);
  return authInstance.post("/regist", formData);
};

const authApi = {
  login,
  regist,
};

export default authApi;

import { create } from "zustand";
import { Token } from "../api/auth";
import { AUTH, getStorage, setStorage } from "../hooks/useStorage";

interface AuthState extends Token {
  login: (token: Token) => void;
  logout: () => void;
}

const useAuth = create<AuthState>()((set) => ({
  access_token: getStorage(AUTH)?.access_token || "",
  username: getStorage(AUTH)?.username || "",
  token_type: getStorage(AUTH)?.token_type || "",
  login: (token: Token) =>
    set(() => {
      setStorage(AUTH, token);
      return {
        ...token,
      };
    }),
  logout: () => set(() => ({ access_token: "", username: "", token_type: "" })),
}));

export default useAuth;

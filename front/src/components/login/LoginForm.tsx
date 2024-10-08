import { AxiosError } from "axios";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import useLoginError from "../../hooks/useLoginError";
import AuthBtn from "./ui/AuthBtn";
import Input from "./ui/Input";

const LoginForm = () => {
  const {
    loginFormData,
    handleSubmit,
    handleChangeValue,
    isLoginMode,
    loginError,
    isValid,
  } = useLogin();
  const { passwordError } = useLoginError(loginError as AxiosError);

  return (
    <form className='flex flex-col gap-4 p-2' onSubmit={handleSubmit}>
      <Input
        value={loginFormData.username}
        type='text'
        id='username'
        label='닉네임'
        onChange={handleChangeValue("username")}
      />
      <Input
        value={loginFormData.password}
        error={passwordError}
        type='password'
        id='password'
        label='비밀번호'
        onChange={handleChangeValue("password")}
      />
      {!isLoginMode && (
        <Input
          value={loginFormData.passwordConfirm}
          id='password-confirm'
          label='비밀번호 확인'
          type='password'
          onChange={handleChangeValue("passwordConfirm")}
        />
      )}
      <Link
        className='text-center w-full'
        to={isLoginMode ? "/signup" : "/login"}>
        {isLoginMode ? "회원가입 하러가기" : "로그인 하러가기"}
      </Link>
      <AuthBtn isLoginMode={isLoginMode} isValid={isValid} />
    </form>
  );
};

export default LoginForm;

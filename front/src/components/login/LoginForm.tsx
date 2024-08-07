import useLogin from "../../hooks/useLogin";
import AuthBtn from "./ui/AuthBtn";
import Input from "./ui/Input";

const LoginForm = () => {
  const { handleSubmit, handleChangeValue, isLoginMode } = useLogin();

  return (
    <form className='flex flex-col gap-4 p-2' onSubmit={handleSubmit}>
      <Input
        type='text'
        id='username'
        label='유저 이름'
        onChange={handleChangeValue("username")}
      />
      <Input
        type='password'
        id='password'
        label='비밀번호'
        onChange={handleChangeValue("password")}
      />
      {!isLoginMode && (
        <Input
          id='password-confirm'
          label='비밀번호 확인'
          type='password'
          onChange={handleChangeValue("passwordConfirm")}
        />
      )}
      <AuthBtn isLoginMode={isLoginMode} />
    </form>
  );
};

export default LoginForm;

import useLogin from "../../hooks/useLogin";
import AuthBtn from "./ui/AuthBtn";
import Input from "./ui/Input";

const LoginForm = () => {
  const {handleSubmit, handleChangeValue, isLoginMode} = useLogin();  


  return <form onSubmit={handleSubmit}>
    <Input type="text" id="username" onChange={handleChangeValue('username')}/>
    <Input type="password" id="password" onChange={handleChangeValue('password')}/>
    {!isLoginMode && <Input id="password-confirm" type='password'  onChange={handleChangeValue('passwordConfirm')}/>}
    <AuthBtn isLoginMode={isLoginMode}/>
  </form>
};

export default LoginForm;
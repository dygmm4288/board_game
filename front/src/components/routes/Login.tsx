import LoginForm from "../login/LoginForm";

const Login = () => {
  return (
    <article className='flex flex-col gap-8 mt-24'>
      <h1 className='text-center heading'>로그인</h1>
      <LoginForm />
    </article>
  );
};

export default Login;

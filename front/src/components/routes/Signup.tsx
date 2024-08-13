import LoginForm from "../login/LoginForm";

const Signup = () => {
  return (
    <article className='flex flex-col gap-8 mt-24'>
      <h1 className='text-center heading'>회원가입</h1>
      <LoginForm />
    </article>
  );
};

export default Signup;

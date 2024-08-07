const Btn = (type: "로그인" | "회원가입") => (
  <button className='p-5 bg-indigo-400 rounded-lg' type='submit'>
    {type}
  </button>
);

const LoginBtn = () => Btn("로그인");
const SignUpBtn = () => Btn("회원가입");

const AuthBtn = ({ isLoginMode }: { isLoginMode: boolean }) =>
  isLoginMode ? <LoginBtn /> : <SignUpBtn />;

export default AuthBtn;

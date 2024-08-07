import { Link } from "react-router-dom";
import { border_black } from "../../css/border";
import { cn } from "../../util/cn";
import LoginForm from "../login/LoginForm";

const Login = () => {
  return (
    <article className='flex flex-col'>
      <div className='basis-[500px] p-5 bg-slate-400'>
        <h1 className='text-center'>로그인</h1>
      </div>
      <div className={cn(border_black, "rounded-lg flex flex-col")}>
        <Link className='text-center w-full' to='/signup'>
          회원가입 하러가기
        </Link>
        <LoginForm />
      </div>
    </article>
  );
};

export default Login;

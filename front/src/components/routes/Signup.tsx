import { Link } from "react-router-dom";
import { border_black } from "../../css/border";
import { cn } from "../../util/cn";
import LoginForm from "../login/LoginForm";

const Signup = () => {
  return (
    <article className='flex flex-col'>
      <div className='basis-[500px] p-5 bg-slate-400'>
        <h1 className='text-center'>회원가입</h1>
      </div>
      <div className={cn(border_black, "rounded-lg flex flex-col")}>
        <Link to='/login' className='text-center w-full'>
          로그인 하러가기
        </Link>
        <LoginForm />
      </div>
    </article>
  );
};

export default Signup;

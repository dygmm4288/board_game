import { border_primary } from "../../../css/border";
import { cn } from "../../../util/cn";

const activeBtnCSS = cn("bg-primary-color text-white", border_primary);
const disableBtnCSS = cn(
  "bg-transparent text-primary-font-color",
  border_primary,
);

const Btn = (type: "로그인" | "회원가입", isValid: boolean) => (
  <button
    className={cn(
      "mt-16 p-2 rounded-lg h-10",
      isValid ? activeBtnCSS : disableBtnCSS,
    )}
    type='submit'
    disabled={!isValid}>
    {type}
  </button>
);

const LoginBtn = ({ isValid }: { isValid: boolean }) => Btn("로그인", isValid);
const SignUpBtn = ({ isValid }: { isValid: boolean }) =>
  Btn("회원가입", isValid);

const AuthBtn = ({
  isLoginMode,
  isValid,
}: {
  isLoginMode: boolean;
  isValid: boolean;
}) =>
  isLoginMode ? (
    <LoginBtn isValid={isValid} />
  ) : (
    <SignUpBtn isValid={isValid} />
  );

export default AuthBtn;

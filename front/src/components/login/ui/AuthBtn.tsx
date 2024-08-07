
const LoginBtn = () => <button type='submit'>login</button>
const SignUpBtn = () => <button type='submit'>signup</button>

const AuthBtn = ({isLoginMode}:{isLoginMode: boolean}) => isLoginMode ? <LoginBtn /> : <SignUpBtn/>


export default AuthBtn;
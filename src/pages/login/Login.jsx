import { Alert, Button } from "@mui/material";
import "./login.css"

const Login = (props) => {
    const {
        email,
        password,
        setEmail,
        setPassword,
        emailError,
        passwordError,
        hasAccount,
        setHasAccount,
        handleSignin,
        handleSignup
    } = props;

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }
    
    return (
        <div className="login">
            <div className="loginContainer">
            {hasAccount ? (
                <h1 className="loginTitle">Sign In</h1>
            ) : (
                <h1 className="loginTitle">Create Account</h1>
            )}
            { (emailError || passwordError) ? (
                <Alert severity="error">{emailError}</Alert> 
            ) : (
                <></>
            )}

            <form className="loginForm">
                <div className="loginFormItem">
                <label>Username</label>
                <input type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>

                <div className="loginFormItem">
                <label>Password</label>
                <input type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </form>
                {hasAccount ? (
                        <div className="buttonContainer">
                                <Button className="loginToggleButton"
                                    variant="text"
                                    onClick={() => {
                                        setHasAccount(!hasAccount);
                                        clearInputs();
                                        }}>
                                        Create Account
                                </Button>
                                <button className="loginButton"  
                                onClick={ () => {
                                    handleSignin();
                                    clearInputs();
                                    }}>
                                    Sign in
                                </button>
                        </div>
                    ) : (
                        <div className="buttonContainer">
                            <Button className="loginToggleButton"
                                    variant="text"
                                     onClick={() => {
                                        setHasAccount(!hasAccount);
                                        clearInputs();
                                        }}>
                                    Sign in Instead
                            </Button>
                            <button className="loginButton" 
                                onClick={ () => {
                                    handleSignup();
                                    clearInputs();
                                    }}>
                                    Sign up
                                </button>
                        </div>
                )}
            </div>
        </div>
    )
}

export default Login;
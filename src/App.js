import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import "./app.css"
import Home from './pages/home/Home';
import Users from './pages/user/User';
import Issueslist from './pages/issueslist/Issueslist';
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-auth/firebase-config"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/login/Login';

function App() {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(1);

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const setErrors = (err) => {
    setEmailError("Error:" + err.message);
  }

  const handleSignup = async () => {
    try {
      clearErrors();
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      setErrors(error);
    }
  };

  const handleSignin = async () => {
    clearErrors();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      setErrors(error);
    }
  };

  const handleSignout = async () => {
    await signOut(auth);
  };

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return (
    <Router>
      { user ? (
        <>
        <Topbar loggedin={true} handleSignout = {handleSignout}/>
        <div className="container">
          <Sidebar/>
          <div className="appPages">
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/users" element={<Users/>}></Route>
            <Route exact path="/tickets" element={<Issueslist/>}></Route>
          </Routes>
          </div>
        </div>
        </>
        ) : (
          <>
            <Topbar loggedin={false} handleSignout = {handleSignout}/>
            <div className="container">
            <Login 
              email = {email}
              password = {password}
              setEmail = {setEmail}
              setPassword = {setPassword}
              emailError = {emailError}
              passwordError = {passwordError}
              hasAccount = {hasAccount}
              setHasAccount = {setHasAccount}
              handleSignin = {handleSignin}
              handleSignup = {handleSignup}
            />
            </div>
          </>
        )}
    </Router>
  );
}

export default App;

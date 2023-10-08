import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [services, setServices] = useState([]);

  // google provider
  const googleProvider = new GoogleAuthProvider();

  // google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // create user with email password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // email password login
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // email password log out
  const logOut = () => {
    return signOut(auth);
  };

  // scroll top
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // set user
  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      console.log(currentUser);
      setUser(currentUser);
    });
  }, []);

  useEffect(() => {
    fetch("services.json")
      .then(res => res.json())
      .then(result => setServices(result));
  }, []);
  const data = {
    user,
    handleTop,
    createUser,
    signIn,
    logOut,
    googleLogin,
    services,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;

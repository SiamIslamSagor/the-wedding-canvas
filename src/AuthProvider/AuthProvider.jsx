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
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // google provider
  const googleProvider = new GoogleAuthProvider();

  // google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // create user with email password
  const createUser = (email, password) => {
    // setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // email password login
  const signIn = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // email password log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // scroll top
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // update profile
  const updateUserDetails = (userName, userProfile) => {
    console.log(userName, userProfile);
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: userProfile,
    });
  };

  useEffect(() => {
    fetch("services.json")
      .then(res => res.json())
      .then(result => setServices(result));
  }, []);

  // set user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const data = {
    user,
    loading,
    handleTop,
    createUser,
    signIn,
    googleLogin,
    updateUserDetails,
    logOut,
    services,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;

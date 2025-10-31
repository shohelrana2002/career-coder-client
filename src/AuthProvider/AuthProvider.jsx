import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const app = auth;
  const [loading, setLoading] = useState(true);

  const handleSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(app, email, password);
  };

  const handleSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(app, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(app, async (currentUser) => {
      if (currentUser) {
        // console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
      } else {
        setLoading(false);
        setUser(null);
      }
    });
    return () => unSubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSendEmail = () => {
    return sendEmailVerification(app?.currentUser);
  };

  const handleResetPass = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(app, email);
  };

  const handleSignOut = () => {
    setLoading(true);
    return signOut(app);
  };
  const provider = new GoogleAuthProvider();
  const handleGoogle = () => {
    setLoading(true);
    return signInWithPopup(app, provider);
  };

  const info = {
    user,
    loading,
    setLoading,
    handleGoogle,
    handleSignIn,
    handleSignUp,
    handleSignOut,
    handleSendEmail,
    handleResetPass,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

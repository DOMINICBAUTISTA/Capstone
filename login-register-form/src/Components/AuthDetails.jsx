import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  return (
    <div className={`auth-details-container${authUser ? " auth-details-container--visible" : ""}`}>
    </div>
  );
};

export default AuthDetails;

import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import initializeFirebase from "../Firebase/Firebase.init";

initializeFirebase();

const useAuth = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  const registerWithEmail = (name, email, password, navigate) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name);
        setError("");
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(setLoading(false));
  };

  const loginWithEmail = (email, password, location, navigate) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setUser(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(setLoading(false));
  };

  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://fierce-meadow-33737.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  // get currently signed in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
  }, [auth]);

  // check if a user admin or not
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
          setAdmin(data.admin);
      });
  }, [user.email]);

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  return {
    user,
    loading,
    admin,
    error,
    registerWithEmail,
    loginWithEmail,
    logOut,
  };
};
export default useAuth;

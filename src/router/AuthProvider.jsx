import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { PropTypes } from 'prop-types';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const facebookProvider = new FacebookAuthProvider();
    const signInWithFacebook = () =>{
        setLoading(true);
        return signInWithPopup(auth, facebookProvider)
    }

    const githubProvider = new GithubAuthProvider();
    const signInWithGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const logOutUser = () =>{
        setUser(null)
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe();
        };
    },[])

    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        logOutUser,
        signInWithGoogle,
        signInWithGithub,
        signInWithFacebook
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
  };
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

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
    const logOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log("current user", currentUser)
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
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
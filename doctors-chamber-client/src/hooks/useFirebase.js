import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeFirebase from './../components/LoginComponents/Firebase/firebase.init';

// initialize firebase app
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    // new user registration
    const registerUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                setAuthError('');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    }


    // user login
    const loginUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                setAuthError('');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // observe user state presence
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth])

    // logout current user
    const logOutUser = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setAuthError('');
        }).catch((error) => {
            // An error happened.
            setAuthError(error.message);
        })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        authError,
        registerUser,
        loginUser,
        logOutUser,
    };
}

export default useFirebase;
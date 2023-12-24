import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/firbase.config";
import Swal from 'sweetalert2'

export const AuthContext = createContext(null);





const AuthProvider = ({children}) => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)    }

    //   Observe auth state change
    useEffect(()=>{
     const unsubscribe =   onAuthStateChanged(auth,currentUser=>{
            console.log("current User ",currentUser)
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{unsubscribe()}
    },[])

    const logOut =()=>{
        setLoading(true);

        signOut(auth)
        .then(()=>{
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Logout successful",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(()=>{
            console.log("sign out not done")
        })
    }
    
    const authInfo ={user,createUser,signInUser,logOut,loading}
    
        return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}
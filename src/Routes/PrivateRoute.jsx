import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <div className="flex h-auto justify-center "><span className="loading  loading-spinner text-accent"></span></div>
    }
    if (user){
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;
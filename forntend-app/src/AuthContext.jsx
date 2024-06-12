import { createContext,useState } from "react";

export const AuthContext=createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider=({children})=>
    {
const [token , setToken ] = useState(localStorage.getItem('token')|| '')
const saveToken = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };
        return(
            <AuthContext.Provider value={{token,saveToken}}>
                {children}
            </AuthContext.Provider>
        )
    }
    export default AuthProvider
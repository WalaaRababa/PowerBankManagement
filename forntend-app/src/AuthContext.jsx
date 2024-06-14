import { createContext,useState } from "react";

export const AuthContext=createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider=({children})=>
    {
const [token , setToken ] = useState(localStorage.getItem('token')|| '')
const [role , setRole ] = useState(localStorage.getItem('user')||'')
const saveToken = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };
  const saveRole=(role)=>
    {
        setRole(role)
        localStorage.setItem('role', role);

    }
        return(
            <AuthContext.Provider value={{token,saveToken,saveRole,role}}>
                {children}
            </AuthContext.Provider>
        )
    }
    export default AuthProvider
// create a context

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();


// share the created context with otner components

function AuthProvider({children})
{
    // put some state in the context 

    const [isFullSidebar, setIsFullSidebar] = useState(false);
    const [user, setUser] = useState({
        email:"",
        username:"",
        mobile_no:"",
        password:"",
        avatar:"",
    });
    const [isLogin, setIsLogin] = useState(false);

   

    


    return (
       <AuthContext.Provider value={{isFullSidebar, setIsFullSidebar, user, setUser, isLogin, setIsLogin}}>
       {
        children
       }
       </AuthContext.Provider> 
    )
}

export default AuthProvider
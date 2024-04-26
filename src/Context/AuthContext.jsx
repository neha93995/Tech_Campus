// create a context

import { createContext, useState } from "react";

export const AuthContext = createContext();


// share the created context with otner components

function AuthProvider({children})
{
    // put some state in the context 

    const [isFullSidebar, setIsFullSidebar] = useState(false);


    return (
       <AuthContext.Provider value={{isFullSidebar, setIsFullSidebar}}>
       {
        children
       }
       </AuthContext.Provider> 
    )
}

export default AuthProvider
import React, { useState, createContext, ReactNode, Dispatch, SetStateAction } from "react";

interface AuthContextProps {
    auth: {
        user?: string;
        pwd?: string;
        roles?: string[];
        accessToken?: string;
    };
    setAuth: Dispatch<SetStateAction<{
        user?: string;
        pwd?: string;
        roles?: string[];
        accessToken?: string;
    }>>;
}

const AuthContext = createContext<AuthContextProps>({
    auth: {},
    setAuth: () => {},
});

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [auth, setAuth] = useState({});
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();
//21520766 -  Đặng Quốc Duy
export function AuthProvider({ children }) {
    const [userId, setUserId] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <AuthContext.Provider value={{
            userId, isLoggedIn,
            setUserId, setIsLoggedIn
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

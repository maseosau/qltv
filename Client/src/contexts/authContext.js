import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();
//21520766 -  Đặng Quốc Duy
export function AuthProvider({ children }) {
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    return (
        <AuthContext.Provider value={{
            username, email, fullname, phoneNumber, address,
            setUsername, setEmail, setFullname, setPhoneNumber, setAddress
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

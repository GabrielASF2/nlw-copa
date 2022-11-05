import { createContext } from "react";

interface UserProps {
    name: String;
    avatarUrl: String;
}

 export interface AuthContextDataProps {
    user: UserProps;
    signIn: () => Promise<void>;
 }  



export const AuthContext = createContext({} as AuthContextDataProps);
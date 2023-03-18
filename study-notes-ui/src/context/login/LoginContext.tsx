import { createContext, useReducer } from "react";
import { loginReducer } from "./LoginReducer";

interface LoginContextType {
  login: boolean;
  signup: boolean;
}

const LoginContext: any = createContext<LoginContextType | any>({});

export const LoginProvider = ({ children }: any) => {
  const initialState: LoginContextType = {
    login: false,
    signup: false,
  };

  const [state, dispatch] = useReducer(loginReducer, initialState);

  return (
    <LoginContext.Provider value={{ ...state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;

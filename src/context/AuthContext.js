import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../services/Firebase';

const AuthContext = createContext();

export function useAuth() {
   return useContext(AuthContext);
}

export function AuthProvider({ children }) {
   const [currentUser, setCurrentUser] = useState();
   
   useEffect(() => {
      const request = auth.onAuthStateChanged(currentUser => setCurrentUser(currentUser));

      return request;
   }, [])

   function signup(email, password) {
      return auth.createUserWithEmailAndPassword(email, password);
   }

   function login(email, password) {
      return auth.signInWithEmailAndPassword(email, password);
   }

   const value = {
      currentUser,
      signup,
      login
   }

   return (
      <AuthContext.Provider value={value}>
         {children}
      </AuthContext.Provider>
   );
}
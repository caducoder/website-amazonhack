import { signInWithEmailAndPassword, User } from 'firebase/auth';
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { db, auth } from '@/firebase-config';
import { toast } from 'react-toastify';
import router, { useRouter } from 'next/router';

const AuthContext = createContext({
  user: {} as User | null,
  login: (data: LoginData) => { },
  logout: () => { },
  isLoading: false
});

export function AuthProvider({ children }: { children: ReactNode; }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const login = async ({ email, password }: LoginData) => {
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser(user);
      toast.success("Bem-vindo de volta!");
      router.push('/network-register');
    } catch (error) {
      console.error("Erro no login:", error);
      toast.error("Ocorreu um erro inesperado. Por favor, tente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
import React, { useContext } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, User, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { TArgCallback, TCallback } from '../types'

type TUser = User | null
interface TLoginData {
  email: string
  password: string
}
const blankFunction = async (): Promise<void> => {}
interface ContextState { user: TUser, loading: boolean, login: TArgCallback<TLoginData, Promise<void>>, logout: TCallback<Promise<void>> }

const FirebaseAuthContext =
  React.createContext<ContextState>({ user: null, loading: true, login: blankFunction, logout: blankFunction })

interface TProps {
  children: React.ReactNode
}

export const useAuth = (): ContextState => useContext(FirebaseAuthContext)

export const FirebaseAuthProvider: React.FC<TProps> = ({ children }) => {
  const [user, setUser] = React.useState<TUser>(null)
  const [loading, setLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })
  }, [])

  const login: ContextState['login'] = async (userData: TLoginData) => {
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, userData.email, userData.password)
    } finally {
      setLoading(false)
    }
  }

  const logout: ContextState['logout'] = async () => {
    try {
      setLoading(true)
      await signOut(auth)
    } finally {
      setLoading(false)
    }
  }

  const value = { user, loading, login, logout }

  return (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
  )
}

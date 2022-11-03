import React, { useContext } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '../firebase'

type TUser = User | null
interface ContextState { user: TUser }

const FirebaseAuthContext =
  React.createContext<ContextState>({ user: null })

interface TProps {
  children: React.ReactNode
}

export const useAuth = (): ContextState => useContext(FirebaseAuthContext)

export const FirebaseAuthProvider: React.FC<TProps> = ({ children }) => {
  const [user, setUser] = React.useState<TUser>(null)
  const value = { user }

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
    return unsubscribe
  }, [])

  return (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
  )
}

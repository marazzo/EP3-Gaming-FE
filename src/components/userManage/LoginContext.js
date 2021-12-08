import React, { useContext, useState } from 'react'

const LoginSessionContext = React.createContext()
const SetLoginUserContext = React.createContext()

export const useLoggedInUser = () => {
  return useContext(LoginSessionContext)
}

export const useSetLoginUser = () => {
  return useContext(SetLoginUserContext)
}

export const LoginSessionProvider = ({ children }) => {
  // const [sessionUser, setSessionUser] = useState(null)
  const sessionUser = 'bernard'
  return(
    <LoginSessionContext.Provider value={sessionUser}>
      <SetLoginUserContext.Provider value={'hello'}>
        {children}
      </SetLoginUserContext.Provider>
    </LoginSessionContext.Provider>

  )
}
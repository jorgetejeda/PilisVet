import React from 'react'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'

export const NotRegisteredUser = ({ isAuth, activateAuth }) => {
  const { registerMutation, registerLoading, registerError } = useRegisterMutation()
  const { loginMutation, loginLoading, loginError } = useLoginMutation()

  // FIXME: la variable de isAuth se actualiza 3 vecces
  // Pasando de un valor a otro
  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password }
    registerMutation({ variables: { input } }).then(({ data }) => {
      activateAuth(data.signup)
    })
  }

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    loginMutation({ variables: { input } }).then(({ data }) => {
      activateAuth(data.login)
    })
  }

  const errorRegisterMsg = registerError && 'El usuario ya existe o hay algún problema.'

  const errorLoginMsg = loginError && 'Usuario o contraseña no coinciden o el usuario no existe.'

  return (
    <>
      <UserForm
        disabled={registerLoading}
        title='Registrarse'
        error={errorRegisterMsg}
        onSubmit={onSubmitRegister}
      />
      <UserForm
        disabled={loginLoading}
        title='Iniciar Sesión'
        error={errorLoginMsg}
        onSubmit={onSubmitLogin}
      />
      {/* {isAuth
        ? <UserForm
            disabled={registerLoading}
            title='Registrarse'
            error={errorRegisterMsg}
            onSubmit={onSubmitRegister}
          />
        : <UserForm
            disabled={loginLoading}
            title='Iniciar Sesión'
            error={errorLoginMsg}
            onSubmit={onSubmitLogin}
          />} */}
    </>
  )
}

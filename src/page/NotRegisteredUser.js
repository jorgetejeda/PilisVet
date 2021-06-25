import React, { useContext } from 'react'
import { AppContext } from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'

export const NotRegisteredUser = () => {
  const { isAuth, activateAuth } = useContext(AppContext)
  const { mutation, mutationLoading, mutationError } = useRegisterMutation()

  // FIXME: la variable de isAuth se actualiza 3 vecces
  // Pasando de un valor a otro
  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    mutation({ variables: { input } }).then(activateAuth)
  }

  const errorMsg =
    mutationError && 'El usuario ya existe o hay algún problema.'

  return (
    <>
      {isAuth
        ? <UserForm
            disabled={mutationLoading}
            title='Registrarse'
            error={errorMsg}
            onSubmit={onSubmit}
          />
        : <UserForm
            disabled={mutationLoading}
            title='Iniciar Sesión'
            error={errorMsg}
            onSubmit={onSubmit}
          />}
    </>
  )
}

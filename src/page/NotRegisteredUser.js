import React, { useContext } from 'react'
import { AppContext } from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'

export const NotRegisteredUser = () => {
  const { isAuth, activateAuth } = useContext(AppContext)
  const { mutation } = useRegisterMutation()

  // FIXME: la variable de isAuth se actualiza 3 vecces
  // Pasando de un valor a otro
  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    mutation({ variables: { input } }).then(activateAuth())
  }

  return (
    <>
      {
        isAuth
          ? <UserForm title='Registrarse' onSubmit={onSubmit} />
          : <UserForm title='Iniciar Sesión' onSubmit={onSubmit} />
      }
    </>
  )
}

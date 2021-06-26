import { gql, useMutation } from '@apollo/client'

const REGISTER_MUTATION = gql`
  mutation login($input: UserCredentials!) {
    signup(input: $input)
  }
`

export const useRegisterMutation = () => {
  const [registerMutation, { loading: registerLoading, error: registerError }] = useMutation(REGISTER_MUTATION)
  return { registerMutation, registerLoading, registerError }
}

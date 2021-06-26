import { gql, useMutation } from '@apollo/client'

const LOGIN_MUTATION = gql`
    mutation login($input: UserCredentials!){
        login(input: $input)
    }
`

export const useLoginMutation = () => {
  const [loginMutation, { loading: loginLoading, error: loginError }] = useMutation(LOGIN_MUTATION)
  return { loginMutation, loginLoading, loginError }
}

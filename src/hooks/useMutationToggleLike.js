import { gql, useMutation } from '@apollo/client'

const MUTATION_LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`

export const useMuationToogleLike = () => {
  const [likeMutation, { loading: likeMutationLoading, error: likeMutationError }] = useMutation(MUTATION_LIKE_PHOTO)
  return { likeMutation, likeMutationLoading, likeMutationError }
}

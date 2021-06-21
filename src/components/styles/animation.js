import { css, keyframes } from 'styled-components'

// Haremos nuestra animacion exportable para cualquier otro
// Fade In
const fadeInKeyFrames = keyframes`
  from{
    filter:blur(5px);
    opacity:0;
  }
  to{
    filter:blur(0);
    opacity: 1;
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyFrames} ${type};
  `

// Scale Down
const scaleDownKeyFrames = keyframes`
  from{
    transform: scale(1) translateY(0px);
  }
  to{
    transform: scale(0.5) translateY(20px);
  }
`

export const scaleDown = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${scaleDownKeyFrames} ${type};
`

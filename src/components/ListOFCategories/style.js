import styled, { css } from 'styled-components'
import { fadeIn } from '../styles/animation'
export const List = styled.ul`
  display: flex;
  overflow: scroll;
  flex-direction: row;
  margin-bottom: 20px;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  ${(props) =>
    props.fixed &&
    css`
      background: #fff;
      border-radius: 60px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      max-width: 400px;
      padding: 5px;
      position: fixed;
      right: 0;
      top: -20px;
      transform: scale(0.5);
      ${fadeIn()}
      z-index: 1;
    `}/* &.fixed {
    background: #fff;
    border-radius: 60px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(0.5);
    ${fadeIn()}
    z-index: 1;
  } */
`

export const Item = styled.li`
  padding: 0 8px;
`

import Styled from "styled-components";
import { Link as LinkRouter} from '@reach/router'
import {FadeIn} from '../../style/animation'

export const Nav = Styled.nav`
  max-width: 100%;
  height: 4.5rem;
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fcfcfc;
  justify-content: space-around;
  align-items:center;
  border-top: 1px solid black;
`;


export const Link = Styled(LinkRouter)`
  justify-content:center;
  text-decoration: none;
  align-items: center;
  display: inline-flex;
  text-transform: uppercase;
  color: #888;

  &[aria-current]{
    color: black;

    &:after{
    ${FadeIn({ time: "0.4s" })}
    content: '__';
    bottom: 30px;
    position: absolute;
    font-size:3rem;
    line-height: 20px;
    }
  
  }
`;
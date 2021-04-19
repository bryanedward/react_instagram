import Styled from "styled-components";
import { Link as LinkRouter} from '@reach/router'

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
  justity-content:center;
  text-decoration: none;
  text-transform: uppercase;
  color: #888;
  align-items:center;
`;
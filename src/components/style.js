import  styled  from 'styled-components';
import {Link as LinkRouter} from '@reach/router'


export const  Link = styled(LinkRouter)`
   text-decoration: none;
   text-align: center;
   width: 100%;
   height: auto;
   display: flex;
   flex-direction: column;

`

export const Image = styled.img`
    border: 1px solid black;
    border-radius: 50%;
    height: 2.4rem;
    width: 100%;
    margin-bottom: .6rem;
    overflow: hidden;
    object-fit: cover;
`

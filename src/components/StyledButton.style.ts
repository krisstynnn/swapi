import styled, {css} from 'styled-components'

export const Button = styled.button`
background: ${(props:any) => props.primary ? "palevioletred" : "white"};
color: ${(props:any) => props.primary ? "white" : "palevioletred"};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
text-decoration: none
import styled, {css} from 'styled-components'

const Button = styled.button`

  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  
  :hover {
    background: #fff;
    color: #000;
  }
`

export default Button;
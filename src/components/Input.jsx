import styled from 'styled-components'

const Input = styled.input`
  display: flex;
  justify-content: center;
  margin: 25px 0;
  width: 65%;
  border-radius: 20px;
  min-height: 40px;
  border: none;
  box-shadow: 2px 5px 6px rgb(0 0 0 / 0.3);
  padding: 0 25px;
  width: 90%;

  ::placeholder {
    color: #00000029;
  }
`

export default Input

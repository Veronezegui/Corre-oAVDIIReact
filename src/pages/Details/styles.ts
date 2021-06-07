import styled from 'styled-components'


export const Container = styled.div`
width: 100%;
max-width: 580px;
margin: 0 auto;
padding: 0 30px 15px;

background: #fff;
border: 1px solid #ddd;
margin-top: 30px;
border-radius: 4px;
border: 1;
font-family: 'Lexend', sans-serif;
`

export const Disciplinas = styled.div`
  ul li {
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    font-family: 'Lexend', sans-serif;

  }


  span{
    font-family: 'Lexend', sans-serif;
  }

  button{
    border-radius: 4px;
    border: 0;
    background: #7159c1;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 10px 20px;
    font-family: 'Lexend', sans-serif;
    display
  }


  .box {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }`

  export const Form = styled.form`
  width: 100%;
  max-width: 580px;
  margin: 30px auto 0;
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;
  margin-bottom: 18px;
  font-family: 'Lexend', sans-serif;

  display: flex;
  flex-direction: column;


  input {
    margin-bottom: 10px;
  }

  input[type='text'] {
    height: 38px;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 0 20px;
    font-size: 14px;
  }

  .bttAlt{

  }
`

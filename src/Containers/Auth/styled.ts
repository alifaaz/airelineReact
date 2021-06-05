import styled from 'styled-components'

export const StyledContainer = styled.div`
    background:rgba(207, 17, 135, 0.85);
    width:100%;
    height:100vh;
    position:relative;
`

export const LoginContent = styled.div`
    border-radius:10px;
    box-shadow:0px 0px 31px #eee;
    padding:40px;
    display:flex;
    flex-direction:column;
    .input{
        margin:10px 0;
    }
    width:350px;
    max-height:350px;
    margin:auto;
    margin-top:200px;
    background:#fff;
    position:absolute;
    left:40%;
`

export const ErrorStyled = styled.div`
    color:coral;
    font-size:12px;
    text-align:center;
    margin:5px;
`
import styled from 'styled-components'


export const ButtonStyled = styled.div`
    border-radius:10px;
    color:#fff;
    background:rgba(207, 17, 135, 0.69);
    text-align:center;
    padding:10px;
    cursor:pointer;
    box-shadow:1px 1px 1px #eee;
    :&focus,:&active{
        box-shadow:0px 0px 0px #eee;

    }
`
import styled from 'styled-components'


export const FlightStyled = styled.div`
    background:#fff;
    padding:10px;
    margin:10px;
    display:flex;
    flex-direction:column;
    text-align: center;
    min-width: 250px;
    border: 1px solid #eee;
    border-radius: 24px;
    height: 292px;
    box-shadow: 1px 1px 28px #eee;
    img{
        width:100px;
        height:100px;
        border-radius:50%;
        margin:auto;
    }
    .title{
        margin:1px 0;
        font-size:12px;

    }
`

export const From = styled.div`
    font-weight:bold;
    font-size:16px;
    margin:15px 0;
    span{
        font-size:13px;
        color:grey
    }
`


export const BookButton = styled.div`
    border-radius:10px;
    color:#fff;
    background:rgba(207, 17, 135, 0.69);
    text-align:center;
    padding:10px;
    cursor:pointer;
    box-shadow:1px 1px 1px #eee;
    width:70px;
    height:40px;
    margin:auto;
`
import styled from 'styled-components'

export const StyledItesms = styled.div`
    display:flex;
    
`

export const Item = styled.div`
    border-radus:10px;
    width:100px;
    height:100px;
    padding:10px;
    margin:0 10px;
    ${(props:{active?:boolean}) =>props.active&& `
    width:110px;
    height:110px;
    `}

`

export const ColumnSection = styled.div`
        display:flex;
        flex-direction:column;
        color:grey;
        text-align:center;
`


export const Filter = styled.div`
    border-radius:50px;
    background:#fff;
    color:#aaa;
    text-align:center;
    fonts-size:24px;
    height:200px;
    padding:auto;
    
`
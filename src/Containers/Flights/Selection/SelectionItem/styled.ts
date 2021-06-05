import styled from 'styled-components'


export const Item = styled.div`
    border-radius:10px;
    width:77px;
    height:74px;
    padding:10px;
    margin:0 10px;
    background:${(props:{color?:string}) =>props.color};
    svg{
        width:60px;
        fill:#fff;
        height: 44px;
    }
    border:none;
    cursor:pointer;
`

export const ColumnSection = styled.div`
        display:flex;
        flex-direction:column;
       
`

export const Title = styled.div`
    color:grey;
    text-align:center;
    font-size:15px;
    margin:10px 0;
`
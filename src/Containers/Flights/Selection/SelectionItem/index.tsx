import React, { FC } from "react"
import { ColumnSection, Item, Title } from "./styled"
import { Props } from "./types"



const SelectionItem:FC<Props> = ({
    icon,
    color,
    title,
    action

}) => {


    return (
        <ColumnSection >
            <Item onClick={action} color={color}> {icon}  </Item>
            <Title>{title}</Title>
        </ColumnSection>
    )
}


export default SelectionItem
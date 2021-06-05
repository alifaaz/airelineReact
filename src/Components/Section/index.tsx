import React, { FC } from "react"
import { ContentStyled, Title } from "./styled"
import { Props } from "./types"



const Section:FC<Props> = ({title, children}) => {


    return (
        <ContentStyled>
            <Title>
                {title}
            </Title>
            {children}
        </ContentStyled>
        
    )
}


export default Section
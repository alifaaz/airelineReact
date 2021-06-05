import React, { FC } from "react"
import { ButtonStyled } from "./styled"
import { Props } from "./types"




const ButtonComponent: FC<Props> = ({
    clickButton,
    title
}) => {


    return (
       <ButtonStyled onClick={clickButton}>
            {title}
       </ButtonStyled>
    )
}


export default ButtonComponent
import React, { FC } from "react"
import { Input } from "semantic-ui-react"
import { StyleInput } from "./styled"
import { Props } from "./types"



const InputComponent: FC<Props> = ({
    value,
    icon,
    label,
    type,
    changeInput
}) => {


    return (
        <StyleInput>
            <label htmlFor={label}>{label}</label>
            <Input
                value={value}
                type={type}
                icon={icon}
                name={label}
                onChange={changeInput}
                iconPosition={'left'}
            />
        </StyleInput>
    )
}


export default InputComponent
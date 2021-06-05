import React, { FC, useEffect, useState } from "react"
import { Loader } from "semantic-ui-react"
import ButtonComponent from "../../Components/Button"
import InputComponent from "../../Components/input"
import connected from "./connects"
import { ErrorStyled, LoginContent, StyledContainer } from "./styled"
import { Props } from "./types"



const Login: FC<Props> = ({ loginAction,loading,error}) => {

    const [firstname, setEmail] = useState('john')
    const [passport, setPassport] = useState('1')

    const login = () => {
        if(!loading){

            loginAction({
                firstname,
                passport
            })
        }
    }

  
    const buttomLoad = loading?'loading...':'login'
    return (
        <StyledContainer>
            <LoginContent>
                <h1>Login</h1>
                <InputComponent
                    value={firstname}
                    label={'E-mail'}
                    type={'email'}
                    icon={'mail'}
                    changeInput={(e, d) => setEmail(e.target.value)}
                    />
                <InputComponent
                    value={passport}
                    label={'Passport'}
                    type={'email'}
                    icon={'key'}
                    changeInput={(e, d) => setPassport(e.target.value)}
                    
                    />
                    <ButtonComponent
                        title={buttomLoad}
                        clickButton={login}
                    />
                  {error&& <ErrorStyled>{error}</ErrorStyled>}
            </LoginContent>
        </StyledContainer>
    )
}


export default connected(Login)
import React, { FC } from "react"
import { BookButton, FlightStyled, From } from "./styled"
import { Props } from "./types"


const FlightItem:FC<Props> = ({
    bookAction,
    id,
    title,
    from,data
}) => {


    const bookClickable = () => {
        bookAction(data.id)
    }
 

    return (
        <FlightStyled>
            <img src="https://cdn.dribbble.com/users/4839201/screenshots/14767777/media/bf89cc6c4807726d559fb962e6a08d51.png" alt="wt" />
            <div className='title'>{data.to_city}</div>
            <From><span>from</span> {data.from_city}</From>
            <BookButton onClick={bookClickable}>book</BookButton>
        </FlightStyled>

        )
}


export default FlightItem
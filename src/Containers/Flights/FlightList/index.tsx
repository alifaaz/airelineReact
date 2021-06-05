import React, { FC } from "react"
import { IFlightData } from "../types"
import FlightItem from "./FlightItem"
import { StyledList } from "./styled"
import { Props } from "./types"


const FlightList: FC<Props> = ({ data,bookFlight}) => {

    return (
        <StyledList>
        {data&&data.map((val:IFlightData) =>(
            <FlightItem
                id={data.id}
                title={data.to_city}
                from={data.from_city}
                bookAction={bookFlight}
                 data={val}
            />
        ) )}
        </StyledList>
    )

}


export default FlightList
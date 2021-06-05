import React, { FC } from "react"
import IconCar from "../../../Components/SvgIcons/icon-car"
import IconFly from "../../../Components/SvgIcons/icon-fly"
import IconTrain from "../../../Components/SvgIcons/icon-train"
import FlightItem from "../FlightList/FlightItem"
import SelectionItem from "./SelectionItem"
import { Filter, StyledItesms } from "./styled"



const Selection:FC<{}> = ({}) => {


    return (<>
        <StyledItesms>
            <SelectionItem color={'purple'} title={'Flights'} action={()=>{}} icon={<IconFly />} />
            <SelectionItem color={'orange'} title={'Cars'} action={()=>{}} icon={<IconCar />} />
            <SelectionItem color={'teal'} title={'Trains'} action={()=>{}} icon={<IconTrain />} />
            
        </StyledItesms>
        <Filter>Filter goes here</Filter>
        </>
    )
}


export default Selection
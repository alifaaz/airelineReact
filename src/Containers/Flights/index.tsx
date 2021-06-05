import React, { FC, useEffect } from "react"
import Section from "../../Components/Section"
import connected from "./connects"
import FlightList from "./FlightList"

import Selection from './Selection'
import { ErrorComponent, StyleContainer } from "./styled"
import { Props } from "./types"

const Flights: FC<Props> = ({
    loading,
    error,
    data,
    fetchFlightAction,
    bookFlightAction,
    bookFlightResetAction,
    bookError,
    bookLoading,
    bookStatus
}) => {

    const getFlights = () => {
        fetchFlightAction()
    }
console.log(bookError)
    const bookFlight = (id: number) => {
        bookFlightAction({ flightId: id,userId:'' })
    }

    useEffect(() => {
        if (!data) {
            getFlights()
        }
    }, [data])

    useEffect(()=>{
        if(bookError){
            alert("already book this flight ")
        }
    },[bookError])

    useEffect(()=>{
        if(bookStatus){
            alert("succeddfuly booked one ")
            bookFlightResetAction()
        }
    },[bookStatus])
    return (
        <StyleContainer>
            <Section title={"where are you going"}>
                <Selection />
            </Section>
            <Section title={"Latest flight deals"}>
                {loading && 'loading ...'}
                {error && <ErrorComponent>{error}</ErrorComponent>}
                {!error && data && <FlightList data={data} bookFlight={bookFlight} />}
            </Section>

        </StyleContainer>
    )
}


export default connected(Flights)
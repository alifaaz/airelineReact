import { connect } from "react-redux"
import { bookFlightAction, bookFlightResetAction, fetchFlightAction } from "../../store/Flights/actions"
import { bookFlightDataSelector, bookFlightErrorSelector, bookFlightLoadingSelector, fetchFlightDataSelector, fetchFlightErrorSelector, fetchFlightLoadingSelector } from "../../store/Flights/selectors"

  const mapDispatchToProps = {
    fetchFlightAction,
    bookFlightAction,
    bookFlightResetAction
}


const mapStateToProps = (state:any) => {
  const flights = state.flights
  return {
    data:fetchFlightDataSelector(flights),
    loading:fetchFlightLoadingSelector(flights),
    error:fetchFlightErrorSelector(flights),
    bookLoading:bookFlightLoadingSelector(flights),
    bookError:bookFlightErrorSelector(flights),
    bookStatus:bookFlightDataSelector(flights)
  }


}
  
const connected = connect(mapStateToProps, mapDispatchToProps)
export default  connected
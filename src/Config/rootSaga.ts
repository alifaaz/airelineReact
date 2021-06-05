import { all, fork } from "redux-saga/effects";
import generalSaga from "../store/general/saga";
import flightSaga from "../store/Flights/saga";


export function* rootSaga() {
  yield all([fork(generalSaga)]);
  yield all([fork(flightSaga)]);

}
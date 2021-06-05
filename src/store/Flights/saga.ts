import { all, call, put, takeLatest } from "redux-saga/effects";
import { NO_DATA, SERVER_ERROR } from "../../Common/errors";
import { BOOK_FLIGHT, FETCH_FLIGHT } from "../global/actionTypes";
import { issetResponse, isValidResponse } from "../global/respones";
import { bookFlightFailAction, bookFlightStartAction, bookFlightSuccessAction, fetchFlightFailAction, fetchFlightStartAction, fetchFlightSuccessAction } from "./actions";
import { bookFlightApi, fetchFlightApi } from "./api";

function* fetchFlightSaga(data:{type:string}) {
    try {
        yield put(fetchFlightStartAction())
      const response = yield call(fetchFlightApi);

      if(issetResponse(response)){
        yield put(fetchFlightSuccessAction(response.data))
        
      }else{

        yield put(fetchFlightFailAction(response));

        }

    } catch (e) {
      yield put(fetchFlightFailAction(SERVER_ERROR));
    }
  }

  function* bookFlightSaga(data:{type:string,params:any}) {
    try {
        yield put(bookFlightStartAction())
    
        const response = yield call(bookFlightApi,data.params);

      if(issetResponse(response)){
          
        yield put(bookFlightSuccessAction())
        
      }else{

        yield put(bookFlightFailAction(response));

        }

    } catch (e) {
      yield put(bookFlightFailAction(SERVER_ERROR));
    }
  }


  function* flightSaga() {
    yield all([takeLatest(FETCH_FLIGHT, fetchFlightSaga)]);
    yield all([takeLatest(BOOK_FLIGHT, bookFlightSaga)]);

  }

  export default flightSaga
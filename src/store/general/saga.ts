import { put } from "@redux-saga/core/effects";
import { all, call, takeLatest } from "redux-saga/effects";
import { NO_DATA, SERVER_ERROR } from "../../Common/errors";
import { goTo } from "../../utils";
import { CHECK_AUTH, LOGIN } from "../global/actionTypes";
import { issetResponse, isValidResponse } from "../global/respones";
import { loginFailAction, loginStartAction, loginSuccessAction } from "./actions";
import { authCheckApi, loginApi } from "./api";


function* loginSaga(data:{type:string,params:any}) {
    try {
        yield put(loginStartAction())
      const response = yield call(loginApi,data.params);

      if(isValidResponse(response)){
        yield put(loginSuccessAction(response.data.token))
        yield localStorage.setItem('token',response.data.token)
        goTo('/')

      }else{

        yield put(loginFailAction(NO_DATA));

        }

    } catch (e) {
      yield put(loginFailAction('user or passowrd wrong'));
    }
  }



function* checkAuthSaga(data:{type:string}) {
  try {
    const token = localStorage.getItem('token')
    if(token){
      const response = yield call(authCheckApi);
      console.log(response)
        if(!issetResponse(response)){
          console.log("nothin")
          goTo('/login')
        }
    }else{
      goTo('/login')
    }

  }catch(err){
    goTo('/login')
  }   
}



  function* generalSaga() {
    yield all([takeLatest(LOGIN, loginSaga)]);
    yield all([takeLatest(CHECK_AUTH, checkAuthSaga)]);

  }

  export default generalSaga
  
import  produce, { Draft } from "immer";
import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from "../global/actionTypes";
import { IGeneral } from "./types";
const initialState: IGeneral = {
    token:null,
    loading:false,
    error:null

  };


  const loginStartReducer = (state:IGeneral)=> {

      return  produce(state,(draft:Draft<IGeneral>) => {
            draft.error = null;
            draft.loading = true
        
        })
    
  }

  const loginFailReducer = (state:IGeneral,action:any)=> {
    return produce(state,(draft:Draft<IGeneral>) => {
        draft.error = action.error;
        draft.loading = false
    })

}

const loginSuccessReducer = (state:IGeneral,action:any) => {
    return produce(state,(draft:Draft<IGeneral>) => {
        draft.error = null;
        draft.loading = false
        draft.token = action.payload
    })

}




export default function(state = initialState, action: any) {
  switch (action.type) {
    case LOGIN_START     : return loginStartReducer(state);
    case LOGIN_FAIL      : return loginFailReducer(state,action);
    case LOGIN_SUCCESS   : return loginSuccessReducer(state,action);

    default: return state
  }
};

  
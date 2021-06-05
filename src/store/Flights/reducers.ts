import  produce, { Draft } from "immer";
import { BOOK_FLIGHT_FAIL, BOOK_FLIGHT_START, BOOK_FLIGHT_SUCCESS, BOOK_RESET, FETCH_FLIGHT_FAIL, FETCH_FLIGHT_START, FETCH_FLIGHT_SUCCESS } from "../global/actionTypes";
import { IFlights } from "./types";

const initialState: IFlights = {
    data:null,
    loading:false,
    error:null,
    book:{
        loading:false,
        error:null,
        success:false
    }

  };


  const fetchFlightStartReducers = (state:IFlights)=> {

      return  produce(state,(draft:Draft<IFlights>) => {
            draft.error = null;
            draft.loading = true
        
        })
    
  }



  const fetchFlightSuccessReducers = (state:IFlights,action:any)=> {

    return  produce(state,(draft:Draft<IFlights>) => {
          draft.error = null;
          draft.loading = false;
          draft.data = action.payload
      
      })
  
}

const fetchFlightFailReducers = (state:IFlights,action:any)=> {

    return  produce(state,(draft:Draft<IFlights>) => {
          draft.error = action.error
          draft.loading = false;
      
      })
  
}


const bookFlightStartReducers = (state:IFlights)=> {
    return  produce(state,(draft:Draft<IFlights>) => {
          draft.book.error = null;
          draft.book.loading = true
      
      })
  
}

const bookFlightSuccessReducers = (state:IFlights)=> {
    return  produce(state,(draft:Draft<IFlights>) => {
          draft.book.error = null;
          draft.book.loading = false
            draft.book.success = true
      })
  
}

const bookFlightFailReducers = (state:IFlights,action:any)=> {

    return  produce(state,(draft:Draft<IFlights>) => {
        draft.book.error = action.error;
        draft.book.loading = false
        draft.book.success = false
      })
  
}

const bookFlightResetReducers = (state:IFlights)=> {

    return  produce(state,(draft:Draft<IFlights>) => {
        draft.book.loading = false
        draft.book.success = false
        draft.book.success = false
      })
  
}

export default function(state = initialState, action: any) {
  switch (action.type) {
   case FETCH_FLIGHT_START : return fetchFlightStartReducers(state);
   case FETCH_FLIGHT_SUCCESS: return fetchFlightSuccessReducers(state,action);
   case FETCH_FLIGHT_FAIL: return fetchFlightFailReducers(state,action)

   case BOOK_FLIGHT_START:return bookFlightStartReducers(state);
   case BOOK_FLIGHT_SUCCESS: return bookFlightSuccessReducers(state);
   case BOOK_FLIGHT_FAIL: return bookFlightFailReducers(state,action);
   case BOOK_RESET: return bookFlightResetReducers(state)
   
    default: return state
  }
};

  
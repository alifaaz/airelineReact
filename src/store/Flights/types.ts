
export type IFlights  = {
    data:string|null;
    loading:boolean;
    error:null|string;
    book:{
        loading:boolean;
        error:string|null;
        success:boolean;
    }
}
  
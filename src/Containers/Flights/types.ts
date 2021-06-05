export type Props = Readonly<IFlightProps>


interface IFlightProps{
    loading:boolean;
    error:null|string;
    data:any;
    fetchFlightAction:()=> void
    bookFlightAction:(params:any) => void
    bookFlightResetAction:() => void;
    bookLoading:boolean;
    bookError:string|null
    bookStatus:boolean
}


export interface IFlightData {
    id:number;
    code_from:string
    code_to:string
    from_city: string
    to_city: string
}
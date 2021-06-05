import { IFlightData } from "../../types";

export type Props = Readonly<IFlightItemProps>


interface IFlightItemProps{
    id:number;
    title:string;
    from:string;
    bookAction:(id:number) => void;
    data:IFlightData
}



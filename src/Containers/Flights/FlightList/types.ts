export type Props = Readonly<IFlightListProps>

interface IFlightListProps{
    data:any;
    bookFlight:(id:number) => void
}
export type Props = Readonly<ISelectionItemProps>


interface ISelectionItemProps{
    icon:any;
    title:string;
    action:() => void;
    color:string;
}
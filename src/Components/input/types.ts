export type Props  = Readonly<IInputProps>


interface IInputProps {
    value:string;
    type:string;
    label:string;
    icon?:any;
    changeInput:(e:any,data:any) => void
}
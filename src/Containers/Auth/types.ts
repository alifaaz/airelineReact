export type Props = Readonly<ILoginProps>


interface ILoginProps{
    loginAction:(params:any) => void;
    loading:boolean;
    error:null|string
}
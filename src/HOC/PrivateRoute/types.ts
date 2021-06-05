export type Props  = Readonly<IPrivateRoutes>


interface IPrivateRoutes {
    path:string;
    component:any;
    isAuth:any;
    exact?:boolean;
    checkAuthAction:() => void
}
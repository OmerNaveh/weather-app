

declare namespace State{
    interface Action{
        type:string
        name?:string
        payload?:{name:string, main:{temp:number}, weather:{main:string}[]}
    }
    type State = {
        name:string,
        temp?:number,
        icon?:any
    }[]
    type Store= Store<State.State, State.Action>;
}
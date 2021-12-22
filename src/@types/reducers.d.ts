
declare namespace State{
    interface Action{
        type:string
        name?:string
        payload?:{name:string, main:{temp:number}}
    }
    type State = {
        name:string,
        temp?:number
    }[]
    type Store= Store<State.State, State.Action>;
}
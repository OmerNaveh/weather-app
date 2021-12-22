

export const weatherReducer = (state:State.State=[],action:State.Action)=>{
    switch(action.type){
        case "Change_Weather":
            if(action.payload){
                console.log(action)
                return [{name:action.payload.name, temp:action.payload.main.temp}];
            }
            else{
                return state
            }
        default:
           return state;
    }
}
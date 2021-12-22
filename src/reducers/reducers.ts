import { icons } from "../assets/iconLibrary";


export const weatherReducer = (state:State.State=[],action:State.Action)=>{
    switch(action.type){
        case "Change_Weather":
            if(action.payload){
                console.log(action)
                return [{name:action.payload.name, temp:action.payload.main.temp, icon:icons[action.payload.weather[0].main]}];
            }
            else{
                return state
            }
        default:
           return state;
    }
}
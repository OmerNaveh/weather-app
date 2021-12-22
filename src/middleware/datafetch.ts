const Key ="9636ea754c3859372ede9f1cc5f4109f"
export const fetchData = (store:State.Store)=>(next:any)=>async(action:State.Action)=>{
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${action.name}&appid=${Key}&units=metric`
        ,{headers:{Accept:"application/json"}}) 
        if(!res.ok) throw res
        const data = await res.json();
        next({...action,payload:data})
    } catch (error) {
        console.log('invalid request')
    }
}
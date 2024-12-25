//TODO: create a counter where i can increment,decrement ,reset and custom increment custom decrement

const { createStore } = require("redux")


//:step 1 create state

const initialcounter={
    count:0
}


//create action

const incrementcounter=()=>{

    return{
        type:"INCREMENT",
    }
}

const decrementcounter=()=>{

    return{
        type:"DECREMENT",
        
    }
}

const incrementbyvalue=(value)=>{

    return{
        type:"INCREMENTBYVALUE",
        payload:value
        
    }
}

const decrementbyvalue=(value)=>{

    return{
        type:"DECREMENTBYVALUE",
        payload:value
        
    }
}

const resetcounter=()=>{

    return{
        type:"RESET",
    }
}


// reducer

const counterreducer=(state=initialcounter,action)=>{

    switch (action.type) {
        case "INCREMENT":
            return{
                ...state,
                count:state.count+1,
            }
            case "DECREMENT":
                return{
                    ...state,
                    count:state.count-1,
                }

                case "RESET":
                    return{
                        ...state,
                        count:state.count=0,
                    }
                case "INCREMENTBYVALUE":
                    return{
                        ...state,
                        count:state.count+action.payload
                    }
                    case "DECREMENTBYVALUE":
                    return{
                        ...state,
                        count:state.count-action.payload
                    }
            
    
        default:
           return state
    }
}


// create store

const store=createStore(counterreducer)

store.subscribe(()=>{

    console.log(store.getState())
})

//action call
store.dispatch(incrementcounter())
store.dispatch(incrementcounter())
store.dispatch(decrementcounter())
store.dispatch(resetcounter())
store.dispatch(incrementbyvalue(56))

store.dispatch(decrementbyvalue(6))

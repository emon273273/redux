const { createStore } = require("redux");

// TODO : step 1 create state

const intialcounterState = {
  count: 0,
};

const initialuserstate = {
  user: [{ name: "emon", id: "201902009" }],
};

//TODO :  step 2 create action

const incrementCounterAction = () => {
  return {
    type: "INCREMENT",
  };
};

const decrementCounterAction = () => {
  return {
    type: "DECREMENT",
  };
};

const adduser = () => {
  return {
    type: "ADDUSER",
    payload: { name: "khalid", id: "201902037" },
  };
};

//Todo:  step3 : Create reducer

const countreducer = (state = intialcounterState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
      

    default:
      return state;
  }
};

// add user reducer
const adduserreducer=(state=initialuserstate,action)=>{

    switch (action.type) {
        case "ADDUSER":
            return{
                ...state,
                user:[...state.user,action.payload]

            }
            
            
    
        default:
            break;
    }
}

//TODO : Step 4 : create store

const store = createStore(countreducer);
const store1=createStore(adduserreducer)


store.subscribe(() => {
  console.log(store.getState());
});

store1.subscribe(()=>{
    console.log(store1.getState())
})
// TODO : step 5  dispatch

store.dispatch(incrementCounterAction());

store.dispatch(decrementCounterAction());

//for user

store1.dispatch(adduser())

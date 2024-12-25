const { createStore, combineReducers } = require("redux");

// state for product and cart

const initialproductstate = {
  product: ["sugar", "salt"],
  numberofproduct: 2,
};

const initialcart = {
    cart: ["sugar"],
    numberofproduct: 1,
  };
// action for product and cart

const getproducts = () => {
  return {
    type: "GET_PRODUCT",
  };
};

const addproduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};


const getcart = () => {
    return {
      type: "GET_CART",
    };
  };
  
  const addcart = (product) => {
    return {
      type: "ADD_CART",
      payload: product,
    };
  };

//reducer for product and cart

const productReducer = (state = initialproductstate, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
      };

    case "ADD_PRODUCT":
      return {
        product: [...state.product, action.payload],

        numberofproduct: state.numberofproduct + 1,
      };

    default:
       return state;
  }
};




const cartreducer = (state = initialcart, action) => {
    switch (action.type) {
      case "GET_CART":
        return {
          ...state,
        };
  
      case "ADD_CART":
        return {
          cart: [...state.cart, action.payload],
  
          numberofproduct: state.numberofproduct + 1,
        };
  
      default:
         return state;
    }
  };

// store for product and cart

const rootreducer=combineReducers({
    productR:productReducer,
    cartR:cartreducer
})

const store = createStore(rootreducer);

store.subscribe(() => {
    
    console.log("Cart State:", store.getState().cartR); // Log only the cart state
    console.log("Product state:", store.getState().productR)
});


store.dispatch(getcart())

store.dispatch(addcart("milk"))
store.dispatch(addproduct("shampoo"))
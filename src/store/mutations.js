export const addProductToCart = (state, payload) => {
  if(state.cartItems.length === 0){
    state.cartItems.push(payload);
  } else {
    var itemFound = false;
    for(var item in state.cartItems) {
      if ( state.cartItems[item].name == payload.name) {
        state.cartItems[item].quantity++;
        itemFound = true;
        break;
      }
    }
    if (!itemFound) {
      state.cartItems.push(payload);
    }
  }
};

export const removeProductFromCart = (state, payload) => {
  for(var item in state.cartItems) {
    if ( state.cartItems[item].name == payload.name) {
      if (state.cartItems[item].quantity === 1) {
        state.cartItems.splice(item, 1);
      }
      else{
        state.cartItems[item].quantity--;
      }
      break;
    }
  }
};

export const addQuantity = (state, payload) => {
  payload.quantity++;
};

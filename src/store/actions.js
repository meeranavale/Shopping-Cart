export const addProductToCart = ({ commit }, payload) => {
  commit('addProductToCart', payload);
};

export const removeProductFromCart = ({ commit }, payload) => {
  commit('removeProductFromCart', payload);
};

export const addQuantity = ({ commit }, payload) => {
  commit('addQuantity', payload);
};

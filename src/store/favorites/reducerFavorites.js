export const initialState = {
  favorites: [],
};

export function reducerFavorites(state, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES": {
      let newState;
      let previousProducts = state.favorites;
      let newProduct = action.payload;

      const foundProduct = previousProducts.find(
        (product) => product.id === newProduct.id
      );

      if (foundProduct) {
        return state;
      } else {
        // scrim cum arata noul state, scriind sintaxa ca si la vechiul state!
        newState = {
          favorites: [...previousProducts, newProduct],
        };
        return newState;
      }
    }

    case "REMOVE_FROM_FAVORITES": {
      let previousProducts = state.favorites;
      let idProduct = action.payload;

      const filteredProducts = previousProducts.filter((product) => {
        //   aceasta functie va returna toate produsele care nu sint egale(diferite) de id-ul venit de la (action)
        return product.id !== idProduct;
      });

      return {
        favorites: filteredProducts,
      };
    }

    default: {
      return state;
    }
  }
}


export function addToFavorites (product){

    return{
        type: "ADD_TO_FAVORITES",
        payload: product
    }
};

// voi identifica ce produs trebuie sa sterg dupa (id) elementului
export function removeFromFavorites(productId){

    return {
        type: "REMOVE_FROM_FAVORITES",
        payload: productId
    }
}
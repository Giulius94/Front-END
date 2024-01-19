export const addFavourites = (data) => {
    return {type: 'ADD_FAVOURITES', payload : data}
}

export const deleteFavourites = (data) => {
    return {type: 'DELETE_FAVOURITES', payload: data}
}
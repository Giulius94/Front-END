export const addFavourites = (data) => {
    return {type: 'ADD_FAVOURITES', payload : data}
}

export const deleteFavourites = (data) => {
    return {type: 'REMOVE_FAVOURITES', payload: data}
}
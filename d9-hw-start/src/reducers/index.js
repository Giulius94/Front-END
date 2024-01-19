export default function storeReducer(state = [], action) {

    switch (action.type){
        case 'ADD_FAVOURITES':
            console.log(action.payload)
            return [...state, action.payload]
        case 'REMOVE_FAVOURITES':
            return state.filter(u => u.title !== action.payload)    
        default:
            break;
    }
}
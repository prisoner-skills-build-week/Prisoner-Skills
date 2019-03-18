import { GETTING_DATA, GET_DATA, CREATING_DATA, CREATE_DATA, UPDATING_DATA, UPDATE_DATA, DELETING_DATA, DELETE_DATA, ERROR} from '../actions';

const initialState = {
    inmates: [],
    gettingData: false,
    updatingData: false,
    creatingData: false,
    deletingData: false,
    error: null
}

export const inmateReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_DATA:
            return {
                ...state,
                gettingData: true 
            }
        case GET_DATA:
            return {
                ...state, inmates: action.payload, gettingData: true
            }
        case CREATING_DATA:
            return {
                ...state, creatingData: true
            }
        case CREATE_DATA:
            return {
                ...state, inmates: action.payload, creatingData: false
            }
        case UPDATING_DATA:
            return {
                ...state, updatingData: true
            }
        case UPDATE_DATA:
            return {
                ...state, inmates: action.payload, updatingData: false
            }
        case DELETING_DATA:
            return {
                ...state, deletingData: true
            }
        case DELETE_DATA:
            return {
                ...state, inmates: action.payload, deletingData: false
            }
        case ERROR:
            return {
                ...state,
                gettingData: false,
                creatingData: false,
                deletingData: false,
                updatingData: false,
                error: action.payload
            }
            default: return state
    }
}
import {SINGLE_INMATE, TOGGLE_UPDATE_INMATE} from '../actions'

const initialState = {
    inmateSelected: {},
    showUpdate: false
};

export const singleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SINGLE_INMATE:
            return {
                ...state, inmateSelected: action.payload, showUpdate: false
            }
        case TOGGLE_UPDATE_INMATE:
            return {
                ...state, showUpdate: !state.showUpdate
            }
        default:
            return state; 
    }
}
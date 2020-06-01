import { 
    SET_GET_MITRA_BUSINESS
 } from '../actions';

const initialStore = {
    mitraBusiness: [],
}

export default function mitras (state=initialStore, action) {
    const { type, payload } = action;

    switch(type) {
        case SET_GET_MITRA_BUSINESS :
            return { ...state, mitraBusiness : payload }
        default:
            break;
    }
    return state
}
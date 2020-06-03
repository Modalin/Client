import { 
    SET_GET_MITRA_BUSINESS,
    SET_LOADING
 } from '../actions';

const initialStore = {
    mitraBusiness: [],
    loading: false
}

export default function mitras (state=initialStore, action) {
    const { type, payload } = action;

    switch(type) {
        case SET_GET_MITRA_BUSINESS :
            return { ...state, mitraBusiness : payload }
        case SET_LOADING :
            return { ...state, loading : payload }
        default:
            break;
    }
    return state
}
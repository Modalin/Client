import { 
    SET_GET_MITRA_BUSINESS,
    SET_GET_MITRA_BUSINESS_AUTH,
    SET_LOGIN_MITRA,
    SET_LOADING
 } from '../actions';

const initialStore = {
    mitraBusiness: [],
    mitraBusinessAuth: [],
    tokenMitra: {},
    loading: false
}

export default function mitras (state=initialStore, action) {
    const { type, payload } = action;

    switch(type) {
        case SET_GET_MITRA_BUSINESS :
            return { ...state, mitraBusiness : payload }
        case SET_GET_MITRA_BUSINESS_AUTH :
            return { ...state, mitraBusinessAuth : payload }
        case SET_LOGIN_MITRA :
            return { ...state, tokenMitra : payload }
        case SET_LOADING :
            return { ...state, loading : payload }
        default:
            break;
    }
    return state
}
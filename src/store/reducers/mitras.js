import { 
    SET_GET_MITRA_BUSINESS,
    SET_GET_MITRA_BUSINESS_AUTH,
    SET_LOGIN_MITRA
 } from '../actions';

const initialStore = {
    mitraBusiness: [],
    mitraBusinessAuth: {},
    tokenMitra: {}
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
        default:
            break;
    }
    return state
}
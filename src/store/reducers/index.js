import { SET_LOGIN_INVESTOR, SET_LOGIN_MITRA, SET_LOADING } from '../actions';

const initialStore = {
    tokenInvestor: '',
    tokenMitra: '',
    loading: false
}

export default function token (state=initialStore, action) {
    const { type, payload } = action;

    switch(type) {
        case SET_LOGIN_INVESTOR :
            return { ...state, tokenInvestor : payload }
        case SET_LOGIN_MITRA :
            return { ...state, tokenMitra : payload }
        case SET_LOADING :
            return { ...state, loading : payload }
        default:
            return state;
    }
}
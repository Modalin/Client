import { SET_LOGIN_INVESTOR, SET_LOGIN_MITRA } from '../actions';

const initialStore = {
    tokenInvestor: '',
    tokenMitra: ''
}

export default function token (state=initialStore, action) {
    const { type, payload } = action;

    switch(type) {
        case SET_LOGIN_INVESTOR :
            return { ...state, tokenInvestor : payload }
        case SET_LOGIN_MITRA :
            return { ...state, tokenMitra : payload }
        default:
            return state;
    }
    
}
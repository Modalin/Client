import { 
    SET_LOGIN_INVESTOR, 
    SET_GET_INVESTOR_WALLET,
    SET_GET_INVESTOR_BUSINESS,
    SET_GET_INVESTOR_INVEST,
    // SET_EDIT_INVESTOR_PROFILE
 } from '../actions';

const initialStore = {
    // profile: {
    //     name: '',
    //     photo_profile: '',
    //     phone: '',
    //     address: '',
    //     job: ''
    // },
    tokenInvestor: {},
    investorBusiness: [],
    investorWallet: {},
    investorInvest: {}
}

export default function investors (state=initialStore, action) {
    const { type, payload } = action;

    switch(type) {
        case SET_LOGIN_INVESTOR :
            return { ...state, tokenInvestor : { ...payload } }
        case SET_GET_INVESTOR_BUSINESS :
            return { ...state, investorBusiness : payload }
        case SET_GET_INVESTOR_WALLET :
            return { ...state, investorWallet: payload }
        case SET_GET_INVESTOR_INVEST :
            return { ...state, investorInvest: payload }
        // case SET_EDIT_INVESTOR_PROFILE :
        //     return { ...state, profile: { ...payload } }
        default:
            break;
    }
    return state
}
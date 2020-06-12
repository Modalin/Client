import { 
    SET_LOGIN_INVESTOR, 
    SET_GET_INVESTOR_WALLET,
    SET_GET_INVESTOR_BUSINESS,
    SET_GET_INVESTOR_INVEST,
    SET_GET_INVESTOR_DATA,
    SET_GET_INVESTOR_BY_ID,
    SET_ERROR_LOGIN_INVESTOR
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
    investorInvest: {},
    dataInvestor: {},
    dataInvestorById: {},
    errorLoginInvestor: false
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
        case SET_GET_INVESTOR_DATA :
            return { ...state, dataInvestor: payload }
        case SET_ERROR_LOGIN_INVESTOR :
            return { ...state, errorLoginInvestor: payload }
        default:
            break;
    }
    return state
}
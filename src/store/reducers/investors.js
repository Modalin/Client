import { 
    SET_LOGIN_INVESTOR, 
    SET_GET_INVESTOR_WALLET,
    SET_GET_INVESTOR_BUSINESS,
    SET_GET_INVESTOR_INVEST,
    SET_GET_INVESTOR_DATA
 } from '../actions';

const initialStore = {
    tokenInvestor: {},
    investorBusiness: [],
    investorWallet: {},
    investorInvest: {},
    dataInvestor: {}
}

export default function investors (state=initialStore, action) {
    const { type, payload } = action;

    switch(type) {
        case SET_LOGIN_INVESTOR :
            return { ...state, tokenInvestor : payload }
        case SET_GET_INVESTOR_BUSINESS :
            return { ...state, investorBusiness : payload }
        case SET_GET_INVESTOR_WALLET :
            return { ...state, investorWallet: payload }
        case SET_GET_INVESTOR_INVEST :
            return { ...state, investorInvest: payload }
        case SET_GET_INVESTOR_DATA :
            return { ...state, dataInvestor: payload }
        default:
            break;
    }
    return state
}
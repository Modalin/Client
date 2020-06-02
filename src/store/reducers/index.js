import { combineReducers } from 'redux'
import tokenInvestor from './investors'
import investorBusiness from './investors'
import investorWallet from './investors'
import investorInvest from './investors'
import mitraBusiness from './mitras'
import dataInvestor from './investors'
import mitraBusinessAuth from './mitras'
import tokenMitra from './mitras'

export default combineReducers ({
    tokenInvestor,
    investorBusiness,
    investorWallet,
    investorInvest,
    mitraBusiness,
    mitraBusinessAuth,
    dataInvestor,
    tokenMitra
})
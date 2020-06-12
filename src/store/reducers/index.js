import { combineReducers } from 'redux'
import tokenInvestor from './investors'
import investorBusiness from './investors'
import investorWallet from './investors'
import investorInvest from './investors'
import mitraBusiness from './mitras'
import dataInvestor from './investors'
import mitraBusinessAuth from './mitras'
import tokenMitra from './mitras'
import dataInvestorById from './investors'
import loading from './mitras'
import errorLoginInvestor from './investors'
import errorLoginMitra from './mitras'

export default combineReducers ({
    tokenInvestor,
    investorBusiness,
    investorWallet,
    investorInvest,
    dataInvestorById,
    mitraBusiness,
    mitraBusinessAuth,
    errorLoginInvestor,
    errorLoginMitra,
    dataInvestor,
    tokenMitra,
    loading
})
import { combineReducers } from 'redux'
import tokenInvestor from './investors'
import investorBusiness from './investors'
import investorWallet from './investors'
import investorInvest from './investors'

export default combineReducers ({
    tokenInvestor,
    investorBusiness,
    investorWallet,
    investorInvest
})
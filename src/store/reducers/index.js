import { combineReducers } from 'redux'
import tokenInvestor from './investors'
import investorBusiness from './investors'
import investorWallet from './investors'
import investorInvest from './investors'
import mitraBusiness from './mitras'

export default combineReducers ({
    tokenInvestor,
    investorBusiness,
    investorWallet,
    investorInvest,
    mitraBusiness
})
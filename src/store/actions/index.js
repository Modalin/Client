import axios from 'axios';
const baseUrl = 'http://98f06d124b6f.ngrok.io'  

export const SET_LOGIN_INVESTOR = 'SET_LOGIN_INVESTOR';
export const SET_LOGIN_MITRA = 'SET_LOGIN_MITRA';
export const SET_LOADING = 'SET_LOADING';
export const SET_REGIST_INVESTOR = 'SET_REGIST_INVESTOR';
export const SET_REGIST_MITRA = 'SET_REGIST_MITRA';
export const SET_EDIT_INVESTOR_PROFILE = 'SET_EDIT_INVESTOR_PROFILE'; 
export const SET_DELETE_MITRA_PROFILE = 'SET_DELETE_MITRA_PROFILE'; 
export const SET_DELETE_INVESTOR_PROFILE = 'SET_DELETE_INVESTOR_PROFILE'; 
export const SET_EDIT_MITRA_PROFILE = 'SET_EDIT_MITRA_PROFILE'; 
export const SET_GET_INVESTOR = 'SET_GET_INVESTOR';
export const SET_GET_INVESTOR_WALLET = 'SET_GET_INVESTOR_WALLET';
export const SET_DELETE_INVESTOR_WALLET = 'SET_DELETE_INVESTOR_WALLET';
export const SET_GET_INVESTOR_BUSINESS = 'SET_GET_INVESTOR_BUSINESS';
export const SET_GET_INVESTOR_INVEST = 'SET_GET_INVESTOR_INVEST';
export const SET_GET_MITRA_BUSINESS = 'SET_GET_MITRA_BUSINESS';
export const SET_POST_MITRA_BUSINESS = 'SET_POST_MITRA_BUSINESS';
export const SET_EDIT_MITRA_BUSINESS = 'SET_POST_MITRA_BUSINESS';
export const SET_EDIT_MITRA_BUSINESS_INVEST = 'SET_POST_MITRA_BUSINESS_INVEST';
export const SET_EDIT_MITRA_BUSINESS_PROFIT = 'SET_POST_MITRA_BUSINESS_PROFIT';

//error
export const SET_ERROR_LOGIN_INVESTOR = 'SET_ERROR_LOGIN_INVESTOR';
export const SET_ERROR_LOGIN_MITRA = 'SET_ERROR_LOGIN_MITRA';


export const setInvestor = (status) => {
    return { type: SET_LOGIN_INVESTOR, payload : status }
}

export const setLoading = (status) => {
    return { type: SET_LOADING, payload : status }
}

export const set_regist_investor = (data) => {
    return { type: SET_REGIST_INVESTOR, payload: data }
}

export const set_regist_mitra = (data) => {
    return { type: SET_REGIST_MITRA, payload: data }
}

export const set_edit_investor_profile = (data) => {
    return { type: SET_EDIT_INVESTOR_PROFILE, payload: data }
}

export const set_edit_mitra_profile = (data) => {
    return { type: SET_EDIT_MITRA_PROFILE, payload: data }
}

export const set_delete_investor_profile = (data) => {
    return { type: SET_DELETE_INVESTOR_PROFILE, payload: data }
}

export const set_delete_mitra_profile = (data) => {
    return { type: SET_DELETE_MITRA_PROFILE, payload: data }
}

export const set_get_investor_wallet = (data) => {
    return { type: SET_GET_INVESTOR_WALLET, payload: data }
}

export const set_delete_investor_wallet = (data) => {
    return { type: SET_DELETE_INVESTOR_WALET, payload: data }
}

export const set_investor_business = (data) => {
    return { type: SET_GET_INVESTOR_BUSINESS, payload: data }
}

export const set_investor_invest = (data) => {
    return { type: SET_GET_INVESTOR_INVEST, payload: data }
}

export const set_mitra_business = (data) => {
    return { type: SET_GET_MITRA_BUSINESS, payload: data }
}

export const set_post_mitra_business = (data) => {
    return { type: SET_POST_MITRA_BUSINESS, payload: data }
}

export const set_edit_mitra_business = (data) => {
    return { type: SET_EDIT_MITRA_BUSINESS, payload: data }
}

export const set_edit_mitra_business_invest = (data) => {
    return { type: SET_EDIT_MITRA_BUSINESS_INVEST, payload: data }
}

export const set_edit_mitra_business_profit = (data) => {
    return { type: SET_EDIT_MITRA_BUSINESS_PROFIT, payload: data }
}

//error
export const set_error_login_investor = (status) => {
    return { type: SET_ERROR_LOGIN_INVESTOR, payload: status }
}

export const set_error_login_mitra = (status) => {
    return { type: SET_ERROR_LOGIN_MITRA, payload: status }
}



export const loginInvestor = (data) => {
    return (dispatch) => {
        axios
            .post(`${baseUrl}/investor/signIn`, {
                email: data.email, password: data.password
            })
            .then(({ data }) => {
                dispatch(setInvestor(data.token))
            })
            .catch(err => {
                console.log('masuk error investor');
                console.log(err);
                // dispatch(set_error_login_investor(err))
            })
    }
}

export const loginMitra = (data) => {
    return (dispatch) => {
        axios
            .post(`${baseUrl}/mitra/signIn`, {
                email: data.email, password: data.password
            })
            .then(({ data }) => {
                dispatch(setLoginMitra(data.token))
            })
            .catch(err => {
                console.log('masuk error mitra');
                console.log(err);
                dispatch(set_error_login_mitra(err))
            })
    }
}

export const registInvestor = (data) => {
    return (dispatch) => {
        axios
            .post(`${baseUrl}/investor/signUp`, {

            })
            .then(({ data }) => {

            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const registMitra = (data) => {
    return (dispatch) => {
        axios
            .post(`${baseUrl}/mitra/signUp`, {

            })
            .then(({ data }) => {

            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const editInvestorProfile = (id, data) => {
    return (dispatch) => {
        axios
            .patch(`${baseUrl}/investor/${id}`)
            .then(({ data }) => {

            })
            .catch(err => {

            })
    }
}

export const editMitraProfile = (id, data) => {
    return (dispatch) => {
        axios
            .patch(`${baseUrl}/mitra/${id}`)
            .then(({ data }) => {

            })
            .catch(err => {
                
            })
    }
}

export const deleteInvestorProfile = (id) => {
    return (dispatch) => {
        axios
            .delete(`${baseUrl}/investor/${id}`)
            .then(({ data }) => {

            })
            .catch(err => {

            })
    }
}

export const deleteMitraProfile = (id) => {
    return (dispatch) => {
        axios
            .delete(`${baseUrl}/mitra/${id}`)
            .then(({ data }) => {

            })
            .catch(err => {
                
            })
    }
}

export const getInvestorWallet = () => {
    return (dispatch) => {
        axios
            .get(`${baseUrl}/investor/wallet/`)
            .then(({ data }) => {

            })
            .catch(err => {
                
            })
    }
}

export const deleteInvestorWallet = () => {
    return (dispatch) => {
        axios
            .delete(`${baseUrl}/investor/wallet/`)
            .then(({ data }) => {

            })
            .catch(err => {
                
            })
    }
}

export const getInvestorBusiness = () => {
    return (dispatch) => {
        axios
            .get(`${baseUrl}/investor/business`)
            .then(({ data }) => {

            })
            .catch(err => {
                
            })
    } 
}

export const getInvestorInvest = () => {
    return (dispatch) => {
        axios
            .get(`${baseUrl}/investor/invest`)
            .then(({ data }) => {

            })
            .catch(err => {
                
            })
    } 
}

export const getMitraBusiness = () => {
    return (dispatch) => {
        axios
            .get(`${baseUrl}/mitra/business`)
            .then(({ data }) => {

            })
            .catch(err => {
                
            })
    } 
}

export const postMitraBusiness = (data) => {
    return (dispatch) => {
        axios
            .post(`${baseUrl}/mitra/business`)
            .then(({ data }) => {

            })
            .catch(err => {
                
            })
    } 
}

export const editMitraBusiness = (id, data) => {
    return (dispatch) => {
        axios
            .put(`${baseUrl}/mitra/business/${id}`)
            .then(({ data }) => {

            })
            .catch(err => {
                
            })
    } 
}

export const editMitraInvest = (id, data) => {
    return (dispatch) => {
        axios
            .post(`${baseUrl}/mitra/business/invest/${id}`)
            .then(({ data }) => {

            })
            .catch(err => {
                
            })
    } 
}

export const editMitraInvestProfit = (id, data) => {
    return (dispatch) => {
        axios
            .post(`${baseUrl}/mitra/business/profit/${id}`)
            .then(({ data }) => {

            })
            .catch(err => {
                
            })
    } 
}

import axios from 'axios';
const baseUrl = 'http://77188c8f1ca1.ngrok.io'  

//investor

export const SET_LOGIN_INVESTOR = 'SET_LOGIN_INVESTOR';
export const SET_LOADING = 'SET_LOADING';
export const SET_REGIST_INVESTOR = 'SET_REGIST_INVESTOR';
export const SET_EDIT_INVESTOR_PROFILE = 'SET_EDIT_INVESTOR_PROFILE';
export const SET_DELETE_INVESTOR_PROFILE = 'SET_DELETE_INVESTOR_PROFILE';
export const SET_EDIT_MITRA_PROFILE = 'SET_EDIT_MITRA_PROFILE';
export const SET_GET_INVESTOR = 'SET_GET_INVESTOR';
export const SET_GET_INVESTOR_WALLET = 'SET_GET_INVESTOR_WALLET';
export const SET_DELETE_INVESTOR_WALLET = 'SET_DELETE_INVESTOR_WALLET';
export const SET_GET_INVESTOR_BUSINESS = 'SET_GET_INVESTOR_BUSINESS';
export const SET_GET_INVESTOR_DATA = 'SET_GET_INVESTOR_DATA';
export const SET_GET_INVESTOR_INVEST = 'SET_GET_INVESTOR_INVEST';
export const SET_GET_INVESTOR_BY_ID = 'SET_GET_INVESTOR_BY_ID';

//mitra
export const SET_LOGIN_MITRA = 'SET_LOGIN_MITRA';
export const SET_REGIST_MITRA = 'SET_REGIST_MITRA';
export const SET_DELETE_MITRA_PROFILE = 'SET_DELETE_MITRA_PROFILE';
export const SET_GET_MITRA_BUSINESS = 'SET_GET_MITRA_BUSINESS';
export const SET_POST_MITRA_BUSINESS = 'SET_POST_MITRA_BUSINESS';
export const SET_EDIT_MITRA_BUSINESS = 'SET_POST_MITRA_BUSINESS';
export const SET_EDIT_MITRA_BUSINESS_INVEST = 'SET_POST_MITRA_BUSINESS_INVEST';
export const SET_EDIT_MITRA_BUSINESS_PROFIT = 'SET_POST_MITRA_BUSINESS_PROFIT';
export const SET_GET_MITRA_BUSINESS_AUTH = 'SET_GET_MITRA_BUSINESS_AUTH';

//error
export const SET_ERROR_LOGIN_INVESTOR = 'SET_ERROR_LOGIN_INVESTOR';
export const SET_ERROR_LOGIN_MITRA = 'SET_ERROR_LOGIN_MITRA';

export const setInvestor = (data) => {
    return { type: "SET_LOGIN_INVESTOR", payload : data }
}

export const setLoginMitra = (data) => {
    return { type: SET_LOGIN_MITRA, payload: data }
}

export const setGetInvestorById = (data) => {
    return { type: SET_GET_INVESTOR_BY_ID, payload: data }
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

export const set_get_investor = (data) => {
    return { type: SET_GET_INVESTOR_DATA, payload: data}
}

export const set_get_business_mitra_auth = (data) => {
    return { type: SET_GET_MITRA_BUSINESS_AUTH, payload: data}
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
                dispatch(setInvestor(data))
            })
            .catch(err => {
                console.log(err);
                // dispatch(set_error_login_investor(err))
            })
    }
}

export const loginMitra = (data) => {
    return (dispatch) => {
        axios
            .post(`${baseUrl}/mitra/signin`, {
                email: data.email, password: data.password
            })
            .then(({ data }) => {
                console.log(data);
                dispatch(setLoginMitra(data))
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
                name: data.name,
                email : data.email,
                password: data.password,
                address: ' ',
                job: ' ',
                photo_profile: ' ',
                phone: 0,
                wallet: {
                    account_name: data.wallet.account_name,
                    bank_name: data.wallet.bank_name,
                    account_number: data.wallet.account_number,
                    saldo: 0,
                    income: 0,
                    incomePersentase: 0
                },
                document: {
                    KTP: {
                        no_KTP: data.document.KTP.no_KTP,
                        url: data.document.KTP.url
                    },
                    NPWP: {
                        no_NPWP: data.document.NPWP.no_NPWP,
                        url: data.document.NPWP.url
                    }
                }
            })
            .then(({ data }) => {
                dispatch(set_regist_investor(data))
            })
            .catch(err => {
                console.log('masuk error');
                console.log(err);
            })
    }
}

export const registMitra = (data) => {
    return (dispatch) => {
        axios
            .post(`${baseUrl}/mitra/signup`, {
                name: data.name,
                email : data.email,
                password: data.password,
                bank_name: data.bank_name,
                bank_account: data.bank_account,
                account_number: data.account_number,
                address: ' ',
                photo_profile: ' ',
                phone: 0,
                document: {
                    KTP: {
                        no_KTP: Number(data.document.KTP.no_KTP),
                        url: data.document.KTP.url
                    },
                    NPWP: {
                        no_NPWP: data.document.NPWP.no_NPWP,
                        url: data.document.NPWP.url
                    },
                    KTA: {
                        kta: data.document.KTA.kta,
                        total_employee: Number(data.document.KTA.total_employee)
                    },
                    SIUP: {
                        no_SIUP: Number(data.document.SIUP.no_SIUP),
                        url: data.document.SIUP.url
                    }
                }
            })
            .then(({ data }) => {
                dispatch(set_regist_mitra(data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const getMitraBusinessAuth = (data) => {
    console.log('masuk store business auth');
    return (dispatch) => {
        axios
            .get(`${baseUrl}/mitra/business/${data.id}`, {
                headers: {
                    'token' : `${data.token}`
                }
            })
            .then(({ data }) => {
                dispatch(set_get_business_mitra_auth(data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const getInvestor = (data) => {
    return (dispatch) => {
        axios
            .get(`${baseUrl}/investor/`, {
                headers: {
                    'token' : `${data.token}`
                }
            })
            .then(({ data }) => {
                console.log('masuk success get data profile investor di store', data);
                dispatch(set_get_investor(data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const getInvestorById = (id) => {
    console.log('masuk store');
    console.log(id);
    return (dispatch) => {
        axios
            .get(`${baseUrl}/investor/find/${id}`)
            .then(({ data }) => {
                dispatch(setGetInvestorById(data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const editInvestorProfile = (dataProfile) => {
    console.log('masuk edit profil');
    return (dispatch) => {
        axios
            .patch(`${baseUrl}/investor/`, dataProfile.data, {
                headers : {
                    'token' : `${dataProfile.token}`
                }
            })
            .then(({ data }) => {
                console.log('sukses regist');
                dispatch(set_get_investor(data))
            })
            .catch(err => {
                console.log(err);
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

export const getInvestorWallet = ({ token }) => {
    return (dispatch) => {
        axios
            .get(`${baseUrl}/investor/wallet`, {
                headers: {
                    'token' : `${token}`
                  }
            })
            .then(({ data }) => {
                dispatch(set_get_investor_wallet(data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const deleteInvestorWallet = () => {
    return (dispatch) => {
        axios
            .delete(`${baseUrl}/investor/wallet/id`)
            .then(({ data }) => {

            })
            .catch(err => {

            })
    }
}

export const getInvestorBusiness = (data) => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: `${baseUrl}/investor/business`,
            headers: {
                'token' : `${data.token}`
            }
        })
            .then(({ data }) => {
                dispatch(set_investor_business(data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const getInvestorInvest = () => {
    return (dispatch) => {
        axios
            .get(`${baseUrl}/investor/invest`)
            .then(({ data }) => {
                dispatch(set_investor_invest(data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const getMitraBusiness = () => {
    return (dispatch) => {
        axios
            .get(`${baseUrl}/mitra/business`)
            .then(({ data }) => {
                console.log("ini dari redux",data);

                dispatch(set_mitra_business(data))
            })
            .catch(err => {
                console.log(err);
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
                console.log(data);
            })
            .catch(err => {

            })
    }
}

export const investToBusiness = (data) => {
    const dataSend = {
        invest_value: data.invest_value,
        total_unit: data.total_unit
    }
    return (dispatch) => {
        axios
            .patch(`${baseUrl}/investor/business/${data.id}`, dataSend, { headers: {
                'token' : data.token
            }})
            .then(({ data }) => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }
}
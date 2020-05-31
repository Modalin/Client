import axios from 'axios';

export const SET_LOGIN_INVESTOR = 'SET_LOGIN_INVESTOR';
export const SET_LOGIN_MITRA = 'SET_LOGIN_MITRA';

export const setInvestor = (data) => {
    return { type: SET_LOGIN_INVESTOR, payload: data }
}

export const setLoginMitra = (data) => {
    return { type: SET_LOGIN_MITRA, payload : data }
}

export const loginInvestor = (data) => {
    return (dispatch) => {
        axios
            .post('http://4f495e5af17e.ngrok.io/investor/signIn', {
                email: data.email, password: data.password
            })
            .then(({ data }) => {
                dispatch(setInvestor(data.token))
            })
            .catch(err => {
                console.log('masuk error');
                console.log(err);
            })

    }
}

export const loginMitra = (data) => {
    return (dispatch) => {
        axios
            .post('http://4f495e5af17e.ngrok.io/mitra/signIn', {
                email: data.email, password: data.password
            })
            .then(({ data }) => {
                dispatch(setLoginMitra(data.token))
            })
            .catch(err => {
                console.log(err);
            })
    }
}
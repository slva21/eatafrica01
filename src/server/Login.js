import http from './httpConfig'
import config from '../config.json'
import {
    toast
} from 'react-toastify'

const loginUser = async (email, password) => {
    try {
        const {
            data: token
        } = await http.post(config.apiEndpoint + "/users/login", {
            email,
            password
        })
        return token
    } catch (ex) {
        if (ex.response.status === 400) {
            toast.error(ex.response.data, {
                position: 'bottom-center'
            })
        }

    }

}

const loginSeller = async (email, password) => {
    try {
        const {
            data: token
        } = await http.post(config.apiEndpoint + "/authsellers", {
            email,
            password
        })
        return token
    } catch (ex) {
        if (ex.response.status === 400) {
            toast.error(ex.response.data, {
                position: 'bottom-center'
            })
        }

    }
}

export default {
    loginUser,
    loginSeller
}
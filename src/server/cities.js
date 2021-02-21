import http from './httpConfig'
import config from '../config.json'

const getCity = async (id) => {

    try {
        const {
            data: city
        } = await http.get(`${config.apiEndpoint}/cities/${id}`)

        return city

    } catch (er) {
        console.log(er)
    }
}

const getCities = async () => {

    try {
        const {
            data: cities
        } = await http.get(`${config.apiEndpoint}/cities`)

        return cities

    } catch (er) {
        console.log(er)
    }
}

export default {
    getCity,
    getCities
}
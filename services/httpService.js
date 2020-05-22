import Axios from 'axios';

const BASE_URL = 'https://mapi.xchangepro.net/tests/tcm/ofer_baram/'

var axios = Axios.create({
    // withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
});

export default {
    get(data, endpoint) {
        return ajax(endpoint, 'GET', data)
    },
    post(data, endpoint) {
        return ajax(endpoint, 'POST', data)
    },
    put(data, endpoint) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(data, endpoint) {
        return ajax(endpoint, 'DELETE', data)
    }
}

async function ajax(endpoint, method = 'get', data = null) {
    try {
        const res = await axios({
            url: `${BASE_URL}`,
            method,
            data,
        })
        return res.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}
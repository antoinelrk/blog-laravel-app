import axios from 'axios'

/**
 * Fetch API for retrieve paginates articles
 * 
 * @param {Number} page 
 * @returns mixed data|err
 */
export const all = async (page = null) => {
    let data, err;

    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/articles${page != null ? "?page=" + page : ""}`)
        data = response.data
    } catch (e) {
        err = e
    }

    return {
        err,
        data
    }
}

export const create = async (payload) => {
    let data, success = null;

    await axios.post(`${import.meta.env.VITE_API_URL}/articles`, payload, {
        method: 'post',
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    .then(response => {
        success = {
            state: true,
            statusCode: response.status,
        }
        data = response.data
    })
    .catch(err => {
        console.log(err)
        success = {
            state: false,
            statusCode: err.response.status,
            message: err.message
        }
    })

    return {
        data,
        success
    }
}

export const update = async (payload, slug) => {
    let data, success = null;

    await axios.post(`${import.meta.env.VITE_API_URL}/articles/${slug}?_method=PATCH`, payload, {
        method: 'post',
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    .then(response => {
        success = {
            state: true,
            statusCode: response.status,
        }
        data = response.data
    })
    .catch(err => {
        console.log(err)
        success = {
            state: false,
            statusCode: err.response.status,
            message: err.message
        }
    })

    return {
        data,
        success
    }
}

export const destroy = async (slug) => {
    let data, success = null

    await axios.delete(`${import.meta.env.VITE_API_URL}/articles/${slug}`, {
        method: 'DELETE'
        })
    .then(response => {
        success = {
            state: true,
            statusCode: response.status,
        }

        data = response.data
    })
    .catch(err => success = {
        state: false,
        statusCode: err.response.status,
        message: err.message
    })

    return {
        data,
        success
    }
}
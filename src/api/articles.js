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

/**
 * Fetch api for retrieve one article by slug
 * 
 * @param {string} slug 
 * @returns mexed data|state
 */
export const get = async (slug) => {
    console.log(slug)
    let data, success;

    return {
        data,
        success
    }
}

export const create = async (payload) => {
    console.log(payload)
    let data, success;

    return {
        data,
        success
    }
}

export const update = async (payload) => {
    console.log(payload)
    let data, success;

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
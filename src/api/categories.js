import axios from 'axios'

export const fetchCategories = async (excludedId = null) => {
    let data, err;

    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/categories/${excludedId ?? ""}`)
        data = response.data
    } catch (e) {
        err = e
    }

    return {
        err,
        data
    }
}
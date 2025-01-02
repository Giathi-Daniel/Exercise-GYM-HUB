export const exerciseOptions = {
    mehtod: 'GET',
    url: '',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
}

// no params and url. Only method and headers
export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
}

export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json()

    return data;
}
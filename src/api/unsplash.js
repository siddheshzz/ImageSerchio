import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5N5A32_aQjsHG9Vikopf6CZla8Z-F58C2w_rnFP0PFE'
    }
})
import axios from 'axios'

export default axios.create(
    {
        baseURL:'https://api.unsplash.com',
        headers: {
            Authorization: "Client-ID TOz_d5Y7U4Cg7uMBag6IuwVLymzEmxPbgKi1Qsvj_Lc",
          },
    }
)
import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID Qr9-SCZYoYAe9PA6QWsvdG6Xuu0vrx1AX5ZT2GQxUG8'
      }
})
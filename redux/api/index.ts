import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://munchies-api.up.railway.app',
  headers: {
    'Content-Type': 'application/json',
  },
})

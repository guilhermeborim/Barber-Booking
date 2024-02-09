import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export const apiDatabase = axios.create({
  baseURL: import.meta.env.VITE_API_DATABASE,
})

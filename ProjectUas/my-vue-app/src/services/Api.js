// src/api/api.js
import axios from 'axios'

const API_URL = 'https://6888894fadf0e59551ba59a0.mockapi.io'

export const getUsers = async () => {
  try {
    const res = await axios.get(`${API_URL}/users`)
    return res.data
  } catch (error) {
    console.error('Gagal ambil data users:', error)
    return []
  }
}

export const getOrders = async () => {
  try {
    const res = await axios.get(`${API_URL}/orders`)
    return res.data
  } catch (error) {
    console.error('Gagal ambil data orders:', error)
    return []
  }
}

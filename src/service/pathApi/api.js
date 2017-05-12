import axios from 'axios'
import path from './path'

const instance = axios.create({
  baseURL: 'http://46.101.104.85:5000/route/v1/driving/',
  timeout: 10000,
})

export default {
  path: path(instance),
}

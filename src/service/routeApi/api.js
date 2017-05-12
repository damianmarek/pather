import axios from 'axios'
import route from './route'

const instance = axios.create({
  baseURL: 'http://46.101.104.85:5000/route/v1/driving/',
  timeout: 10000,
})

export default {
  route: route(instance),
}

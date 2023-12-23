import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://rana.janenlenneke.nl',
//  baseURL: 'https://rana.erfgoedhuisveldhoven.nl',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Accept:'Acess-Control-Allow-Origin: *',
  },
})

export default {
  getEvents() {
    return apiClient.get("/")
  },

 
  getSelection(v_naam) {
      return apiClient.get("/?v_naam=" + v_naam)
  },

  getEvent(id) {
    return apiClient.get('?id=' + id)
  },
}
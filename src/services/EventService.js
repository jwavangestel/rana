import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://ranadata.erfgoedhuisveldhoven.nl',
//  baseURL: 'https://ranadata.janenlenneke.nl',
//  baseURL: 'https://ranadata.erfgoedhuisveldhoven.nl',
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

 
  getSelection(v_naam, k_naam, kad_plaats, kad_sectie, kad_kavel, ra_of_na, register, folio, datum, plaats, qkaart_nr ) {
      return apiClient.get("/?v_naam=" + v_naam + "&k_naam=" + k_naam + "&kad_plaats=" + kad_plaats  + "&kad_a=" + kad_sectie  + "&kad_nr=" + kad_kavel + "&ra_of_na=" + ra_of_na + "&register=" + register  + "&folio=" + folio + "&qdatum=" + datum  + "&plaats=" + plaats + "&qkaart_nr=" + qkaart_nr)
  },

  getEvent(id) {
    return apiClient.get('?id=' + id)
  },
}
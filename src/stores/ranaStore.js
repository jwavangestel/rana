import { defineStore } from "pinia";
import EventService from '@/services/EventService.js'

export 
 const useRanaStore = defineStore('ranaStore', {
    state: () => ({
        events: [],
        v_naam: '',
        k_naam: '',
        kad_plaats: '',
        kad_sectie: '',
        kad_kavel: '',
        ra_of_na: '',
        register: '',
        folio: '',
        datum: '',
        plaats: '',
        kaart_nr: '',
        offset: 0,
        count: [],
        pagenr : 1,
        perpage: 100,
    }),
    // getters
    // actions
    actions: {
        setSearch(v_naam, k_naam, kad_plaats, kad_sectie, kad_kavel, ra_of_na, register, folio, datum, plaats, kaart_nr) {
            this.v_naam = v_naam
            this.k_naam = k_naam          
            this.kad_plaats = kad_plaats
            this.kad_sectie = kad_sectie
            this.kad_kavel = kad_kavel  
            this.ra_of_na = ra_of_na
            this.register = register
            this.folio = folio
            this.datum = datum
            this.plaats = plaats
            this.kaart_nr = kaart_nr      
        },
       

        getEvents() {
            return EventService.getEvents(v_naam)
            .then(response => {
                this.events = response.data 
            })
            .catch(error => {
                throw error
            })
        }
    }
 })
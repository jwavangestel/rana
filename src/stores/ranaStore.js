import { defineStore } from "pinia";
import EventService from '@/services/EventService.js'
import { RouterLink, RouterView } from 'vue-router'

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
        qkaart_nr: '',
        offset: 0,
        count: [],
        pagenr : 1,
        perpage: 100,
    }),
    // getters
    // actions
    actions: {
        setSearch(v_naam, k_naam, kad_plaats, kad_sectie, kad_kavel, ra_of_na, register, folio, datum, plaats, qkaart_nr) {
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
            this.qkaart_nr = qkaart_nr      
        },
       

        getSelection(v_naam, k_naam, kad_plaats, kad_sectie, kad_kavel, ra_of_na, register, folio, datum, plaats, qkaart_nr) {
            console.log(v_naam.value)
            console.log(kad_plaats.value)
            return EventService.getSelection(v_naam.value, k_naam.value, kad_plaats.value, kad_sectie.value, kad_kavel.value, ra_of_na.value, register.value, folio.value, datum.value, plaats.value, qkaart_nr.value )
            .then(response => {
                this.events = response.data 
 
            })
            .catch(error => {
                throw error
            })
        }
    }
 })
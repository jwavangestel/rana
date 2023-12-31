<script setup>
import axios from 'axios'
import { ref, onMounted, watch, computed } from 'vue'
//import BookCard from '@/components/BookCard.vue'
import EventService from '@/services/EventService.js'
import { useRanaStore } from '@/stores/ranaStore.js'

const events = ref(null)
const rana_Store = useRanaStore()


const v_naam = computed(() => rana_Store.v_naam);
const k_naam = computed(() => rana_Store.k_naam);
const kad_plaats = computed(() => rana_Store.kad_plaats);
const kad_sectie = computed(() => rana_Store.kad_sectie);
const kad_kavel = computed(() => rana_Store.kad_kavel);
const ra_of_na = computed(() => rana_Store.ra_of_na);
const register = computed(() => rana_Store.register);
const folio = computed(() => rana_Store.folio);
const datum = computed(() => rana_Store.datum);
const plaats = computed(() => rana_Store.plaats);
const qkaart_nr = computed(() => rana_Store.qkaart_nr);


defineProps({
  event: {
    type: Object,
    required: true,
  }
})

onMounted(() => {
  const v_Naam = ref(v_naam.value);
  const k_Naam = ref(k_naam.value);
  const kad_Plaats = ref(kad_plaats);
  const kad_Sectie = ref(kad_sectie);
  const kad_Kavel= ref(kad_kavel);
  const ra_of_Na = ref(ra_of_na);
  const Register= ref(register);
  const Folio = ref(folio);
  const Datum = ref(datum);
  const Plaats = ref(plaats);
  const Qkaart_nr = ref(qkaart_nr);
  rana_Store.getSelection(v_Naam, k_Naam, kad_Plaats, kad_Sectie, kad_Kavel, ra_of_Na, Register, Folio, Datum, Plaats, Qkaart_nr ).catch(error => {
    this.router.push(
      {
        name: 'ErrorDisplay',
        params: { error: error }
      }
    )
  })
})

watch ([v_naam, k_naam, kad_plaats, kad_sectie, kad_kavel, ra_of_na, register, folio, datum, plaats, qkaart_nr ], () => {
  const v_Naam = ref(v_naam.value);
  const k_Naam = ref(k_naam.value);
  const kad_Plaats = ref(kad_plaats);
  const kad_Sectie = ref(kad_sectie);
  const kad_Kavel = ref(kad_kavel);
  const ra_of_Na = ref(ra_of_na);
  const Register= ref(register);
  const Folio = ref(folio);
  const Datum = ref(datum);
  const Plaats = ref(plaats);
  const Qkaart_nr = ref(qkaart_nr);

  rana_Store.getSelection(v_Naam, k_Naam, kad_Plaats, kad_Sectie, kad_Kavel, ra_of_Na, Register, Folio, Datum, Plaats, Qkaart_nr ).catch(error => {
    this.router.push(
      {
        name: 'ErrorDisplay',
        params: { error: error }
      }
    )
  })

})





</script>

<template>

  <h1>RANA</h1>

   <div v-for="data in rana_Store.events">
			<div>
          <div class="w3-container">
            <table class="w3-table w3-bordered w3-hoverable">
              <thead>
              <tr>
                <th>id</th>
                <th>R/N</th>
                <th>Reg</th>
                <th>folio</th>
                <th>datum</th>
                <th>plaats</th>
                <th>kaart-nr</th>
                <th>Verkoper</th>
                <th>Verkoper 2</th>
                <th>Koper</th>
                <th>Koper 2</th>
                <th>Kad.aand.1832</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="event in data" :key="event.RANANR" :event="event">
                  <RouterLink :to="{ name: 'RanaDetails', params: {id : event.RANANR}}">               
                    <td>{{ event.RANANR }}</td>
                   </RouterLink>
                  <td>{{ event.RA_OF_NA }}</td>

                  <td>{{ event.REGISTER }}</td>
                  <td>{{ event.FOLIO }}</td>        
                  <td>{{ event.DATUM }}</td>        
                  <td>{{ event.PLAATS }}</td>        
                  <td>{{ event.kaart_nr }}</td>        
                  <td>{{ event.V_NAAM }}</td>        
                  <td>{{ event.V_NAAM_2 }}</td>                
                  <td>{{ event.K_NAAM }}</td>        
                  <td>{{ event.K_NAAM_2 }}</td>        
                  <td>
                      {{ event.KAD_PLAATS }}
                      {{ event.KAD_A }}
                      {{ event.KAD_NR }}
                      {{ event.KAD_NR_2 }}
                      {{ event.KAD_NR_3 }}
                      {{ event.KAD_NR_4}}
                  </td>              
                  </tr>
              </tbody>
            </table>
          </div>
			</div>

   </div>

</template>

<style scoped>
.books {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
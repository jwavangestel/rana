<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import BookCard from '@/components/BookCard.vue'
import EventService from '@/services/EventService.js'

const events = ref(null)

defineProps({
  event: {
    type: Object,
    required: true,
  }
})

onMounted(() => {
  EventService.getEvents()
    .then((response) => {
      events.value = response.data
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
})

</script>

<template>

  <h1>RANA</h1>

   <div v-for="data in events">
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
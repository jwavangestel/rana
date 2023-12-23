<template>

    <div v-if = event>
        <div class="w3-container w3-gray">
            <div class="w3-row w3-light_grey">
                <div class="w3-col w3-container m10 l10 ">
                    <h3>Kaart details</h3>
                    <h2>RA of NA: {{  event.RA_OF_NA }}  &nbsp;  &nbsp; &nbsp; &nbsp;  
                    Register: {{ event.REGISTER }} &nbsp;  &nbsp; &nbsp; &nbsp; 
                    Folio: {{  event.FOLIO }} &nbsp;  &nbsp; &nbsp; &nbsp; 
                    Datum: {{  event.DATUM }}  &nbsp;  &nbsp; &nbsp; &nbsp; 
                    Kaart nr.: {{ event.kaart_nr }} &nbsp;  &nbsp; &nbsp; &nbsp; 
                    Kaart letter: {{ kaart_letter }} </h2>
                </div>
                <div class="w3-col w3-container m2 l2 w3-padding-small">
                    <img src="../logo_EGHV.jpg" class="w3-round-small" alt="Norway" style="width:90%">
                </div>
            </div>    
        </div>
        <br>
        <div class="w3-row w3-light_grey">
            <div class="w3-col w3-container m3 l3 ">
                <div class="w3-card-2 w3-orange" style="width:100% ;">
                    <div class="w3-center">VERKOPER</div>
                        <div class="w3-panel w3-pale-yellow"> 
                            <table class="w3-table">
                                
                                <tr>
                                    <td>Kenmerk</td>
                                    <td>{{ event.V_KENMERK }}</td>
                                </tr>
                                <tr>
                                    <td>Geslacht</td>
                                    <td>{{ event.V_GESLACHT }}</td>
                                </tr><tr>
                                    <td>Naam</td>
                                    <td>{{ event.V_NAAM }}</td>
                                </tr>
                                <tr>
                                    <td>Naam 2</td>
                                    <td>{{ event.V_NAAM_2 }}</td>
                                </tr>
                                <tr>
                                    <td>Beroep</td>
                                    <td>{{ event.V_BEROEP}}</td>
                                </tr>
                                <tr>
                                    <td>Beroep 2</td>
                                    <td>{{ event.V_BEROEP2}}</td>
                                </tr>
                                <tr>
                                    <td>Komt van</td>
                                    <td>{{ event.V_KOMT_VAN}}</td>
                                </tr>
                                <tr>
                                    <td>Komt van 2</td>
                                    <td>{{ event.V_KOMT_V_2}}</td>
                                </tr>
                                <tr>
                                    <td>Diverse</td>
                                    <td>{{ event.V_DIVERSE }}</td>
                                </tr>
                                <tr>
                                    <td>Diverse 2</td>
                                    <td>{{ event.V_DIVERS2 }}</td>
                                </tr>
                                <tr>
                                    <td>Diverse 3</td>
                                    <td>{{ event.V_DIVERS3 }}</td>
                                </tr> 
                            </table> 
                        </div>

                </div>
            </div>

            <div class="w3-col w3-container m3 l3 ">
                <div class="w3-card-2 w3-orange" style="width:100% ;">
                    <div class="w3-center">KOPER</div>
                        <div class="w3-panel w3-pale-yellow"> 
                            <table class="w3-table">
                                
                                <tr>
                                    <td>Kenmerk</td>
                                    <td>{{ event.K_KENMERK }}</td>
                                </tr>
                                <tr>
                                    <td>Geslacht</td>
                                    <td>{{ event.K_GESLACHT }}</td>
                                </tr><tr>
                                    <td>Naam</td>
                                    <td>{{ event.K_NAAM }}</td>
                                </tr>
                                <tr>
                                    <td>Naam 2</td>
                                    <td>{{ event.K_NAAM_2 }}</td>
                                </tr>
                                <tr>
                                    <td>Beroep</td>
                                    <td>{{ event.K_BEROEP}}</td>
                                </tr>
                                <tr>
                                    <td>Beroep 2</td>
                                    <td>{{ event.K_BEROEP_2}}</td>
                                </tr>
                                <tr>
                                    <td>Komt van</td>
                                    <td>{{ event.K_KOMT_VAN}}</td>
                                </tr>
                                <tr>
                                    <td>Komt van 2</td>
                                    <td>{{ event.K_KOMT_V_2}}</td>
                                </tr>
                                <tr>
                                    <td>Diverse</td>
                                    <td>{{ event.K_DIVERSE }}</td>
                                </tr>
                                <tr>
                                    <td>Diverse 2</td>
                                    <td>{{ event.K_DIVERS2 }}</td>
                                </tr>
                                <tr>
                                    <td>Diverse 3</td>
                                    <td>{{ event.K_DIVERS3 }}</td>
                                </tr> 
                            </table> 
                        </div>

                </div>
            </div>
            <div class="w3-col w3-container m3 l3 ">
                    <div class="w3-card-2 w3-orange" style="width:100% ;">
                        <div class="w3-center">Oppervlakte</div>
                        <div class="w3-panel w3-pale-yellow">
                            <table class="w3-table">
                                
                                <tr>
                                    <td>Loop</td>
                                    <td>{{ event.LOOP }}</td>
                                </tr>
                                <tr>
                                    <td>Roe</td>
                                    <td>{{ event.ROE }}</td>
                                </tr><tr>
                                    <td>El</td>
                                    <td>{{ event.EL }}</td>
                                </tr>
 
                            </table> 
                        </div>
                    </div>

                    <div class="w3-card-2 w3-orange" style="width:100% ;">
                        <div class="w3-center">PAND</div>
                        <div class="w3-panel w3-pale-yellow">
                            <table class="w3-table">
                                
                                <tr>
                                    <td>Huis</td>
                                    <td>{{ event.HUIS }}</td>
                                </tr>
                                <tr>
                                    <td>Deel van</td>
                                    <td>{{ event.DEEL_VAN }}</td>
                                </tr><tr>
                                    <td>Perceel</td>
                                    <td>{{ event.PERCEEL }}</td>
                                </tr>
                                <tr>
                                    <td>Tussenvoegsel</td>
                                    <td>{{ event.TUS_VOEG }}</td>
                                </tr>
                                <tr>
                                    <td>Toponiem</td>
                                    <td>{{ event.TOPONIEM}}</td>
                                </tr>
                                <tr>
                                    <td>Toponiem 2</td>
                                    <td>{{ event.TOPONIEM_2}}</td>
                                </tr>
                            </table> 
                        </div>
                    </div>
                </div>
                <div class="w3-col w3-container m3 l3 ">
                    <div class="w3-card-2 w3-orange" style="width:100% ;">
                        <div class="w3-center">BEDRAG EN LASTEN</div>
                        <div class="w3-panel w3-pale-yellow">
                            <table class="w3-table">
                                
                                <tr>
                                    <td>Bedrag</td>
                                    <td>{{ event.BEDRAG }}</td>
                                </tr>
                                <tr>
                                    <td>Bedrag opm.</td>
                                    <td>{{ event.BEDRAG_OPM }}</td>
                                </tr><tr>
                                    <td>Bedrag opm 2</td>
                                    <td>{{ event.BEDRAG_OP2 }}</td>
                                </tr>
                                <tr>
                                    <td>Bedrag opm 3</td>
                                    <td>{{ event.BEDRAG_OP3 }}</td>
                                </tr>
                                <tr>
                                    <td>Lasten</td>
                                    <td>{{ event.LASTEN}}</td>
                                </tr>
                                <tr>
                                    <td>Lasten fl</td>
                                    <td>{{ event.LASTEN_FL}}</td>
                                </tr>
                                <tr>
                                    <td>Lasten 2</td>
                                    <td>{{ event.LASTEN_2}}</td>
                                </tr>
                                <tr>
                                    <td>Lasten fl 2</td>
                                    <td>{{ event.LASTEN_FL2}}</td>
                                </tr>
                                <tr>
                                    <td>Lasten 3</td>
                                    <td>{{ event.LASTEN_3}}</td>
                                </tr>
                                <tr>
                                    <td>Lasten fl 3</td>
                                    <td>{{ event.LASTEN_FL3}}</td>
                                </tr>
                                <tr>
                                    <td>Lasten 4</td>
                                    <td>{{ event.LASTEN_4}}</td>
                                </tr>
                                <tr>
                                    <td>Lasten fl 4</td>
                                    <td>{{ event.LASTEN_FL4}}</td>
                                </tr>
                            </table> 
                        </div>
                    </div>
                    <div class="w3-card-2 w3-orange" style="width:100% ;">
                        <div class="w3-center">VERPONDING</div>
                        <div class="w3-panel w3-pale-yellow">
                            <table class="w3-table">
                                
                                <tr>
                                    <td>Verpond pL</td>
                                    <td>{{ event.VERPOND_PL }}</td>
                                </tr>
                                <tr>
                                    <td>Verpond nr</td>
                                    <td>{{ event.VERPOND_NR }}</td>
                                </tr>
                            </table> 
                        </div>
                    </div>
            </div>        
        </div>
        <div class="w3-row w3-light_grey">
                <div class="w3-col w3-container m4 l4 ">
                    <div class="w3-card-2 w3-orange" style="width:100% ;">
                        <div class="w3-center">VAN == NAAR</div>
                        <div class="w3-panel w3-pale-yellow">
                            <table class="w3-table">
                                
                                <tr>
                                    <td>Van RaNa</td>
                                    <td>{{ event.VAN_RA_NA }}</td>
                                    <td>Naar RaNa</td>
                                    <td>{{ event.NAAR_RA_NA }}</td>
                                </tr>
                                <tr>
                                    <td>Van RaNa 2</td>
                                    <td>{{ event.VAN_RA_N2 }}</td>
                                    <td>Naar RaNa 2</td>
                                    <td>{{ event.NAAR_RA_N2 }}</td>
                                </tr>
                                <tr>
                                    <td>Van RaNa 3</td>
                                    <td>{{ event.VAN_RA_N3 }}</td>
                                    <td>Naar RaNa 3</td>
                                    <td>{{ event.NAAR_RA_N3 }}</td>
                                </tr>
                                <tr>
                                    <td>Van RaNa 4</td>
                                    <td>{{ event.VAN_RA_N4 }}</td>
                                    <td>Naar RaNa 4</td>
                                    <td>{{ event.NAAR_RA_N4 }}</td>
                                </tr>
                                <tr>
                                    <td>Van register</td>
                                    <td>{{ event.VAN_REG }}</td>
                                    <td>Naar register</td>
                                    <td>{{ event.NAAR_REG }}</td>
                                </tr>
                                <tr>
                                    <td>Van register 2</td>
                                    <td>{{ event.VAN_REG_2 }}</td>
                                    <td>Naar register 2</td>
                                    <td>{{ event.NAAR_REG_2}}</td>
                                </tr>
                                <tr>
                                    <td>Van register 3</td>
                                    <td>{{ event.VAN_REG_3 }}</td>
                                    <td>Naar register 3</td>
                                    <td>{{ event.NAAR_REG_3 }}</td>
                                </tr>
                                <tr>
                                    <td>Van register 4</td>
                                    <td>{{ event.VAN_REG_4 }}</td>
                                    <td>Naar register 4</td>
                                    <td>{{ event.NAAR_REG_4 }}</td>
                                </tr>
                                <tr>
                                    <td>Van kaart</td>
                                    <td>{{ event.VAN_KAART }}</td>
                                    <td>Naar kaart</td>
                                    <td>{{ event.NAAR_KAART }}</td>
                                </tr>
                                <tr>
                                    <td>Van kaart 2</td>
                                    <td>{{ event.VAN_KAART2 }}</td>
                                    <td>Naar kaart 2</td>
                                    <td>{{ event.NAAR_KAART2}}</td>
                                </tr>
                                <tr>
                                    <td>Van kaart 3</td>
                                    <td>{{ event.VAN_KAART3 }}</td>
                                    <td>Naar kaart 3</td>
                                    <td>{{ event.NAAR_KAART3 }}</td>
                                </tr>
                                <tr>
                                    <td>Van kaart 4</td>
                                    <td>{{ event.VAN_KAART4 }}</td>
                                    <td>Naar kaart 4</td>
                                    <td>{{ event.NAAR_KAART4 }}</td>
                                </tr>
                            </table> 
                        </div>
                    </div>
                    <div class="w3-card-2 w3-orange" style="width:100% ;">
                        <div class="w3-center">OVERIG</div>
                        <div class="w3-panel w3-pale-yellow">
                            <table class="w3-table">
                                
                                <tr>
                                    <td>Zijde J N</td>
                                    <td>{{ event.ZIJDE_J_N }}</td>
                                </tr>
                                <tr>
                                    <td>Behoord bij</td>
                                    <td>{{ event.BEHOORDBIJ }}</td>
                                </tr>
                                <tr>
                                    <td>Behoord nr</td>
                                    <td>{{ event.BEHOORD_NR }}</td>
                                </tr>
                                <tr>
                                    <td>Behoord M</td>
                                    <td>{{ event.BEHOORDT_M }}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Vernadert</td>
                                    <td>{{ event.VERNADERT }}</td>
                                </tr>
                                <tr>
                                    <td>Opstallen</td>
                                    <td>{{ event.OPSTALLEN }}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Notaris</td>
                                    <td>{{ event.NOTARIS }}</td>
                                </tr>
                                <tr>
                                    <td>Notaris Plaats</td>
                                    <td>{{ event.NOT_PLTS }}</td>
                                </tr>
                            </table> 
                        </div>
                    </div>
                </div>   
                <div class="w3-col w3-container m8 l8 ">
                    <div class="w3-col w3-container m4 l4 ">
                    </div>
                    <div class="w3-col w3-container m4 l4 ">
                        <div class="w3-card-2 w3-orange" style="width:100% ;">
                            <div class="w3-center">NOORD</div>
                            <div class="w3-panel w3-pale-yellow">
                                <table class="w3-table">
                                    
                                    <tr>
                                        <td>Naam</td>
                                        <td>{{ event.NOORD_TUS }}{{ event.NOORD_VN }} {{ event.NOORD_VO }} {{ event.NOORD_AN }}</td>
                                    </tr>
                                    <tr>
                                        <td>Aanduiding</td>
                                        <td>{{ event.NOORD_A }} {{ event.NOORD_NR }} {{ event.NOORD_NR_2 }} {{ event.NOORD_NR_3 }}</td>
                                    </tr>
                                    <tr>
                                        <td>Opmerking</td>
                                        <td>{{event.NOORD_OPM }}</td>
                                    </tr>
                                </table> 
                            </div>
                        </div>
                    </div>    
                    <div class="w3-col w3-container m4 l4 ">
                    </div>
                </div>
                <div class="w3-col w3-container m8 l8 ">
                    <div class="w3-col w3-container m4 l4 ">
                        <div class="w3-card-2 w3-orange" style="width:100% ;">
                            <div class="w3-center">WEST</div>
                            <div class="w3-panel w3-pale-yellow">
                                <table class="w3-table">
                                    
                                    <tr>
                                        <td>Naam</td>
                                        <td>{{ event.WEST_TUS }} {{ event.WEST_VN }} {{ event.WEST_VO }} {{ event.WEST_AN }}</td>
                                    </tr>
                                    <tr>
                                        <td>Aanduiding</td>
                                        <td>{{ event.WEST_A }} {{ event.WEST_NR }} {{ event.WEST_NR_2 }} {{ event.WEST_NR_3 }}</td>
                                    </tr>
                                    <tr>
                                        <td>Opmerking</td>
                                        <td>{{ event.WEST_OPM }}</td>
                                    </tr>
                                </table> 
                            </div>
                        </div>
                    </div>    
                    <div class="w3-col w3-container m4 l4 ">
                        <img src="../assets/roos.png" class="w3-round-small" alt="Norway" style="width:57%" >
                    </div>
                    <div class="w3-col w3-container m4 l4 ">
                        <div class="w3-card-2 w3-orange" style="width:100% ;">
                            <div class="w3-center">OOST</div>
                            <div class="w3-panel w3-pale-yellow">
                                <table class="w3-table">
                                    
                                    <tr>
                                        <td>Naam</td>
                                        <td>{{ event.OOST_TUS }} {{ event.OOST_VN }} {{ event.OOST_VO }} {{ event.OOST_AN }}</td>
                                    </tr>
                                    <tr>
                                        <td>Aanduiding</td>
                                        <td>{{ event.OOST_A }} {{ event.OOST_NR }} {{ event.OOST_NR_2 }} {{ event.OOST_NR_3 }}</td>
                                    </tr>
                                    <tr>
                                        <td>Opmerking</td>
                                        <td>{{ event.OOST_OPM }}</td>
                                    </tr>
                                </table> 
                            </div>
                        </div>
                    </div>    
                </div>
                <div class="w3-col w3-container m8 l8 ">
                    <div class="w3-col w3-container m4 l4 ">
                    </div>
                    <div class="w3-col w3-container m4 l4 ">
                        <div class="w3-card-2 w3-orange" style="width:100% ;">
                            <div class="w3-center">ZUID</div>
                            <div class="w3-panel w3-pale-yellow">
                                <table class="w3-table">
                                    
                                    <tr>
                                        <td>Naam</td>
                                        <td>{{ event.ZUID_TUS }} {{ event.ZUID_VN }} {{ event.ZUID_VO }} {{ event.ZUID_AN }}</td>
                                    </tr>
                                    <tr>
                                        <td>Aanduiding</td>
                                        <td> {{ event.ZUID_A }} {{ event.ZUID_NR }} {{ event.ZUID_NR_2 }} {{ event.ZUID_NR_3 }}</td>
                                    </tr>
                                    <tr>
                                        <td>Opmerking</td>
                                        <td>{{ event.ZUID_OPM }}</td>
                                    </tr>
                                </table> 
                            </div>
                        </div>
                    </div>    
                    <div class="w3-col w3-container m4 l4 ">
                    </div>
                </div>
        </div>    
    </div>
 
</template>

<script setup>

import { BaseTransitionPropsValidators, onMounted, ref } from 'vue'
import EventService from '../services/EventService.js'

const props = defineProps({
    id: { required: true },
})

const event = ref(null)


onMounted(() => {
    console.log("id=" + props.id)
    // fetch book (by id) and set local data
    EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data
      console.log(event.value)
    })
    .catch((error) => {
      console.log(error)
    })
})

</script>
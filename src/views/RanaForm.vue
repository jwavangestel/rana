<script>
import { ref } from "vue";
import { useRanaStore } from "@/stores/ranaStore";


export default {
  setup() {
    const store = useRanaStore();  
     
    const v_naam = ref(store.v_naam);
    if (v_naam.value === '%') {
      v_naam.value = '';
    }
    const k_naam = ref(store.k_naam);
    if (k_naam.value === '%') {
      k_naam .value = '';
    }
    const kad_plaats = ref(store.kad_plaats);
    if (kad_plaats.value === '%') {
      kad_plaats.value = '';
    }
    const kad_sectie = ref(store.kad_sectie);
    if (kad_sectie.value === '%') {
      kad_sectie.value = '';
    }
    const kad_kavel = ref(store.kad_kavel);
    if (kad_kavel.value === '%') {
      kad_kavel.value = '';
    }
    const ra_of_na = ref(store.ra_of_na);
    if (ra_of_na.value === '%') {
      ra_of_na.value = '';
    }
    const register = ref(store.register);
    if (register.value === '%') {
      register.value = '';
    }
    const folio = ref(store.folio);
    if (folio.value === '%') {
      folio.value = '';
    }
    const datum = ref(store.datum);
    if (datum.value === '%') {
      datum.value = '';
    }
    const plaats = ref(store.plaats);
    if (plaats.value === '%') {
      plaats.value = '';
    }
    const kaart_nr = ref(store.kaart_nr);
    if (kaart_nr.value === '%') {
      kaart_nr.value = '';
    }
 

    function addSearch(v_naam, k_naam, kad_plaats, kad_sectie, kad_kavel, ra_of_na, register, folio, datum, plaats, kaart_nr) {
      if (kad_plaats.length === 0) {
        kad_plaats = '%';
      };
      if (kad_sectie.length === 0) {
        kad_sectie = '%';
      };
      if (kad_kavel.length === 0) {
        kad_kavel = '%';
      };
      if (ra_of_na.length === 0) {
        ra_of_na = '%';
      };
      if (register.length === 0) {
        register = '%';
      };
      if (folio.length === 0) {
        folio = '%';
      };
      if (datum.length === 0) {
        datum = '%';
      };
      if (plaats.length === 0) {
        plaats = '%';
      };
      if (kaart_nr.length === 0) {
        kaart_nr = '%';
      };
 

      store.setSearch(v_naam, k_naam, kad_plaats, kad_sectie, kad_kavel, ra_of_na, register, folio, datum, plaats, kaart_nr);  

    


    
 
  }

    return {
      addSearch,
      v_naam,
      k_naam,
      kad_plaats,
      kad_sectie,
      kad_kavel, 
      ra_of_na, 
      register, 
      folio, 
      datum, 
      plaats, 
      kaart_nr
    };
  },
};

//}
</script>

<template>
  <div>
    
    <form class="w3-container w3-dark-grey"    @submit.prevent="addSearch(v_naam, rana, kad_plaats, kad_sectie, kad_kavel, ra_of_na, register, folio, datum, plaats, kaart_nr )">
      <div class="w3-row">
          <div class="w3-col  m4 l4 w3-FloralWhite ">
            <p class="QuestH">
              <label>OORSPRONKELIJKE REGISTRATIE :  </label>
            </p>    

            <div class="w3-col m12 l12">           
              <p class="Quest">
                  <table>
                    <tr>
                      <td>RA of NA : </td>
                      <td><input class="ra_of_na" v-model="ra_of_na" type="text" /></td>
                      <td>Register : </td>
                      <td><input class="register" v-model="register" type="text" /></td>
                      <td>Folio : </td>
                      <td><input class="folio" v-model="folio" type="text" /></td>
                    </tr>
                    <tr>
                      <td>Datum : </td>
                      <td><input class="datum" v-model="datum" type="text" /></td>
                    </tr>
                    <tr>
                      <td>Plaats : </td>
                      <td><input class="plaats" v-model="plaats" type="text" /></td>
                      <td>Kaart nr : </td>
                      <td><input class="kaart_nr" v-model="kaart_nr" type="text" /></td>
                    </tr>
                  </table>
             </p>    
            </div>
          </div>
          <div class="w3-col m4 l4">
            <p class="QuestH">
                <label>VERKOPER en (Aan)KOPER:  </label>
            </p>
            <div class="w3-col m12 l12">
              <p class="Quest">
                  <table>
                    <tr>
                      <td>Naam Verkoper : </td>
                      <td><input class="v_naam"  v-model="v_naam" type="text" /></td>
                    </tr>
                    <tr>
                      <td>Naam Koper : </td>
                      <td><input class="k_naam"  v-model="k_naam" type="text" /></td>
                    </tr>
                  </table>
             </p>    
            </div>
          </div>
          <div class="w3-col m3 l3">
            <p class="QuestH">
                <label>KADASTRALE AANDUIDING 1832:  </label>
            </p>
  
            <div class="w3-col m3 l3">
              &nbsp; &nbsp; &nbsp;
            </div>
            <div class="w3-col m9 l9">
              <p class="Quest">    
                <table>
                    <tr>
                      <td>Kad. Plaats : </td>
                      <td><input class="kad_plaats"  v-model="kad_plaats" type="text" /></td>
                    </tr>
                    <tr>
                      <td>Kad. Sectie : </td>
                      <td><input class="kad_sectie"  v-model="kad_sectie" type="text" /></td>
                    </tr>
                    <tr>
                      <td>Kad. Nummer : </td>
                      <td><input class="kad_kavel"   v-model="kad_kavel" type="text" /></td>
                    </tr>
                  </table>
              </p>
            </div>          
          </div>
        <div class="w3-col m1 l1">
          <p>
            <table>
              <tr><td> &nbsp;  </td></tr>
              <tr><td> &nbsp;  </td></tr>
              <tr><td> &nbsp;  </td></tr>
              <tr><td> &nbsp;  </td></tr>
              <tr>
                <td>
                  <button class="w3-button w3-blue">Selecteren</button>
                </td> 
              </tr>
            </table>
            </p>
        </div> 
      </div>   
    </form>
  </div>
</template>

<style scoped>
.Quest {
  text-align: left;
}
.QuestH {
  text-align: center;
}

.kad_plaats {
  width: 50px;
}
.kad_sectie {
  width: 20px;
}
.kad_kavel {
  width: 70px;
}
.ra_of_na {
  width: 20px;
}
.register {
  width: 40px;
  padding-top: -40px;


}
.folio {
  width: 40px;
}
.datum {
  width: 90px;
}
.plaats {
  width: 100px;
}
.kaart_nr {
  width: 40px;
}
.v_naam {
  width: 300px;
}
.k_naam {
  width: 300px;
}


</style>

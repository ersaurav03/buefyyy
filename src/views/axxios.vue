<template>
  <div >
    <h1> arrr is {{test.datasets[0].data}}</h1>
      <div v-if="isLoading">
    <graphp height="100px" :data="test"></graphp>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import graphp from './graphp.vue'
export default{
  components:{
      graphp
      },
  data () {
          return {
            test:{
            labels: ['Jan', 'Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec'],
            datasets: [
                {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: []
                }
            ]
          },
          }
  },
    created () {
  this.getData();
  },
  methods:{
getData(){
    axios
      .get('https://api.myjson.com/bins/1drway')
      .then(response =>{
       console.log(response);
         this.test.datasets[0].data = response.data.data
         })
        .catch(error => {
          console.log(error);
        })
        .finally(() => (this.loading = false));
           this.isLoading = true;
     },   
  },
}
</script>

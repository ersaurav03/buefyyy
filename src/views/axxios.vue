<template>
  <div >
      <div class="columns">
        <div class="column is-4">
       <graphp height="100px" :data="test"></graphp>
        </div>
        <div class="column is-4">
        <bar height="100px" :data="test"></bar>
        </div>
        <div class="column is-4">
           <pie height="100px" :data="test"></pie>
        </div>
      </div>
    
    
 
    </div>
</template>

<script>
import axios from 'axios'
import graphp from './graphp.vue'
import bar from './barchart.vue'
import pie from './pie.vue'
export default{
  components:{
      graphp,
      bar,
      pie
      },
  data () {
          return {
            test:{
            labels: [],
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
      .get('https://api.myjson.com/bins/fufb6')
      .then(response =>{
       console.log(response);
         this.test.datasets[0].data = response.data.data
         this.test.labels=response.data.labels
         })
        .catch(error => {
          console.log(error);
        })
        .finally(() => (this.loading = true));
           this.isLoading = true;
     },   
  },
}
</script>

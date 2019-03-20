
<template>
  <div >
      <div class="columns">
        <div class="column is-6">{{this.test.datasets}}
       <graphp height="100px" :data="test" :options="options"></graphp>
        </div>

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
            isLoading:false,
            arr:[],
            test:{
            labels: [],
            datasets: []
          },
          options:{
            title:{
              display: true,
              text: "Display Data with Chart.js"
            },
            tooltips: {

              },
        scales: {
            xAxes: [{
                display: true
            }],
            yAxes: [{
                display: true
            }]
        }
          }
          }
  },
    mounted () {
  this.getData();
  },
  methods:{
getData(){
    
    axios
      .get('https://api.myjson.com/bins/90lru')
      .then(response =>{
    //      console.log(response.data.data_sets[0].label);
      console.log(response.data.data_sets)
      this.test.labels=response.data.label_s
      this.test.datasets=response.data.data_sets
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




<template>
  <div >
      <div class="columns">
        <div class="column is-6">
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
                display: false
            }],
            yAxes: [{
                display: false
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
      .get('https://api.myjson.com/bins/6epde')
      .then(response =>{
       console.log(response.data.data);

    //      console.log(response.data.data_sets[0].label);
    //   console.log(this.arr)
    //      this.test.labels=response.data.labels

   debugger
          for(var i=0;i<response.data.data.length;i++)
          {
            this.test.datasets.push({
               label:response.data.data[i].label,
                data:response.data.data[i].series
            })
             
          }
          
        
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



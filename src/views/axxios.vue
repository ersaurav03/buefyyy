<template>
  <div >
      <div class="columns">
        <div class="column is-6">
       <graphp height="100px" :data="test" :options="options"></graphp>
        </div>
        <div class="column is-6">
        <bar height="100px" :data="test" :options="options"></bar>
        </div>
      </div>
      <div class="columns">
        <div class="column is-6">
           <pie1 height="200px" :data="test" :options="options"></pie1>
        </div>
        <div class="column is-6">
        </div>
      </div>
    </div>
</template>
<script>
import axios from 'axios'
import graphp from './graphp.vue'
import bar from './barchart.vue'
import pie1 from './pie.vue'
export default{
  components:{
      graphp,
      bar,
      pie1
      },
  data () {
          return {
            isLoading:false,
            test:{
            labels: [],
            datasets: [
                {
                label: 'Data One',
                backgroundColor: [
                  'rgba(255, 99, 132, 1.0)',
                  'rgba(0, 162, 235, 1.0)',
                  'rgba(255, 206, 86, 0.8)',
                  'rgba(75, 192, 192, 0.7)',
                  'rgba(153, 102, 255, 0.9)',
                  'rgba(255, 159, 64, 1.0)',
                  'rgba(255, 99, 132, 1.0)',
                  'rgba(0, 162, 235, 1.0)',
                  'rgba(255, 206, 86, 0.8)',
                  'rgba(75, 192, 192, 0.7)',
                  'rgba(153, 102, 255, 0.9)',
                  'rgba(255, 159, 64, 1.0)',
                  'rgba(255, 159, 0, 1.0)'
                 ],
                data: [],
                 borderWidth: 3
                }
            ]
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

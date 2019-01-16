<script>
  import { Line } from 'vue-chartjs';
  export default {
    extends: Line,
    mounted () {
      this.renderChart({
        datasets: [{
          label: 'FIS',
        data: [10,5,30,15,50,20,11,44,66,99,49,65,85],          
          borderColor: 'rgb(0, 255, 0)',
          backgroundColor: 'rgba(255,255,255,0.1)'
        },
        {
          label: 'EVRY',
          data: [20,0,30,15,32,50,11,44,77,88,99,75],           
          borderColor: 'rgb(255, 0, 0)',
          backgroundColor: 'rgba(255,255,255,0.1)'
        },
        {
          label: 'Maropost',
          data: [10,20,30,40,50,55,20,81,75,99,85,100], 
          borderColor: 'rgb(0, 0, 255)',
          backgroundColor: 'rgba(255,255,255,0.1)'
        },
        ],
         labels: ['Jan', 'Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec'],
      }, {
        responsive:true,
        maintainAspectRatio:false
      })
    }
  }
</script>

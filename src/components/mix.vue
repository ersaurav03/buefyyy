<script>
  import { Line } from 'vue-chartjs';
  export default {
    extends: Line,
    mounted () {
      this.renderChart({
        datasets: [{
          label: 'FIS',
          data: [10, 6, 30, 20,40,40],           
          borderColor: 'rgb(0, 255, 0)'
        },
        {
          label: 'EVRY',
          data: [20,0,30,15,32,50],           
          borderColor: 'rgb(255, 0, 0)'
        },
        {
          label: 'Maropost',
          data: [10,20,30,40,50,55], 
          borderColor: 'rgb(0, 0, 255)'
        },
        ],
        labels: ['January', 'February', 'March', 'April','May','June']
      }, {
        responsive:false,
        maintainAspectRatio:false
      })
    }
  }
</script>

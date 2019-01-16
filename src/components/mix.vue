<script>
import { Bar } from 'vue-chartjs';
export default {
extends: Bar,
props: ['data', 'options'],
mounted () {
this.renderChart({
  datasets: [{
          label: 'Bar Dataset',
          data: [10, 6, 30, 20,40,25],
          backgroundColor:'rgba(255, 99, 132, 1.0)',           
// borderColor: 'rgb(255, 0, 132)'
        }, {
          label: 'Line Dataset',
          data: [20,100,30,15,32,11],
backgroundColor:'rgba(0, 99, 132, 0.2)',           
// borderColor: 'rgb(255, 0, 132)',
          // Changes this dataset to become a line
          type: 'line'
        }],
    labels: ['January', 'February', 'March', 'April']
}, {
	responsive:false,
	maintainAspectRatio:false
})
}
}
</script>
<!-- 
<style type="text/css">
  
  datasets: [{
          label: 'Bar Dataset',
          data: [10, 20, 30, 40]
        }, {
          label: 'Line Dataset',
          data: [50, 50, 50, 50],

          // Changes this dataset to become a line
          type: 'line'
        }],
    labels: ['January', 'February', 'March', 'April']
</style> -->
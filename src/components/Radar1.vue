<script>
  import { Radar } from 'vue-chartjs';
  export default {
    extends: Radar,
    props: ['data', 'options'],
    mounted () {
      this.renderChart({
         labels: ['Jan', 'Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec'],
        datasets: [
        {
          label: 'Radar chart Representation',
          backgroundColor: [
          'rgba(100, 99,255, 0.3)',
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
          borderColor:
          [
          'rgb(255, 0, 132)',
          'rgb(255,99,132)',
          'rgb(255,99,132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          'rgb(255, 0, 132)',
          'rgb(255,99,132)',
          'rgb(255,99,132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)'
          ] ,
            // borderWidth: 1,
          data: [10,5,30,15,50,20,11,44,66,99,49,65]
          }
          ]
        }, {
         responsive:false,
         maintainAspectRatio:false

       })
    }
  }
</script>
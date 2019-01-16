<script>
  import { Bar } from 'vue-chartjs';
  export default {
    extends: Bar,
    mounted () {
      this.renderChart({
        labels: ['Jan', 'Feb','Mar','Apr','May',"Jun"],
        datasets: [
        {
          label: 'Data One',
          backgroundColor: [
          'rgba(255, 99, 132, 1.0)',
          'rgba(0, 162, 235, 1.0)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.9)',
          'rgba(255, 159, 64, 1.0)'
          ],
          borderColor:
          [
          'rgb(255, 0, 132)',
          'rgb(255,99,132)',
          'rgb(255,99,132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          ] ,
          borderWidth: 1,
          data: [10,5,30,15,50,20]
        }
        ]
      }, {
        responsive:false,
        maintainAspectRatio:false

      })
    }
  }
</script>
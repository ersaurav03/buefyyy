<script>
import { Pie } from 'vue-chartjs';
export default {
extends: Pie,
props: ['data', 'options'],
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

borderColor: [
                'rgba(255,99,132,0.1)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.3)',
                'rgba(255, 159, 64, 0.3)'
            ],
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
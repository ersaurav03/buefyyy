<script>
import { Bar } from 'vue-chartjs';
export default {
extends: Bar,
props: ['data', 'options'],
mounted () {
this.renderChart({
labels: ['Jan', 'Feb','Mar','Apr','May',"Jun"],
datasets: [
{
label: 'Data One',
backgroundColor: '#f87979',
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
<script>
import { Line } from 'vue-chartjs';
export default {
extends: Line,
props: ['data', 'options'],
mounted () {
this.renderChart({
labels: ['Jan', 'Feb','Mar','Apr','May',"Jun"],
datasets: [
{
label: 'Data One',
backgroundColor: '#f87979',
 borderColor: [ 
 'rgb(255, 0, 132)'

 ],
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
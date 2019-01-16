<script>
import { Line } from 'vue-chartjs';
export default {
extends: Line,
props: ['data', 'options'],
mounted () {
this.renderChart({
labels: ['Jan', 'Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec'],
datasets: [
{
label: 'Line chart Representation',
backgroundColor: 'rgba(255,255,255,0.5)',
 borderColor: [ 
 'rgb(255, 0, 132)'

 ],
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
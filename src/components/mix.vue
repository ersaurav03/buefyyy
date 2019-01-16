<script>
import { Line } from 'vue-chartjs';
export default {
extends: Line,
// props: ['data', 'options'],
mounted () {
this.renderChart({
datasets: [{
label: 'FIS',
data: [10, 6, 30, 20,40,40],
// backgroundColor:'rgba(255, 99, 132, 0.5)',           
borderColor: 'rgb(0, 255, 0)'
},
{
label: 'EVRY',
data: [20,0,30,15,32,50],
// backgroundColor:'rgba(0, 99, 132, 0.5)',           
borderColor: 'rgb(255, 0, 0)',
// Changes this dataset to become a line
// type: 'line'
},
{
label: 'Maropost',
data: [10,20,30,40,50,55],
// backgroundColor:'rgba(0, 99, 132, 0.5)',           
borderColor: 'rgb(0, 0, 255)',
// Changes this dataset to become a line
// type: 'line'
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

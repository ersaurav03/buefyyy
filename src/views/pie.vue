
<script>
import { PolarArea } from 'vue-chartjs';
export default {
extends: PolarArea,
props: ['data', 'options','height'],
mounted () {
this.renderChart(this.data, this.options)
}
}
</script>

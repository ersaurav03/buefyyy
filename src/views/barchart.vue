
<script>
import { Bar } from 'vue-chartjs';
export default {
extends: Bar,
props: ['data', 'options','height'],
mounted () {
this.renderChart(this.data, this.options)
}
}
</script>

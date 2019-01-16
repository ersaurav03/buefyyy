
<template>
<div>

<div class="columns">
	<div class="column">
		<!-- <monthly-income :height="300" /> -->
		<MonthlyIncome></MonthlyIncome>
	</div>
		<div class="column">
		<bar1></bar1>
	</div>
		<div class="column">
		<pie1></pie1>
	</div>
	
</div>


</div>
</template>
<script>
	    import { Line } from 'vue-chartjs';
  import { Pie } from 'vue-chartjs';
   import { Bar } from 'vue-chartjs';
    


import MonthlyIncome from './monthlyincome.vue'
import bar1 from './bar1.vue'
import pie1 from './pie1.vue'
export default {

components: { MonthlyIncome,bar1,pie1 },

}


</script>
<style>
  .d1{}
</style>


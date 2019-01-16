
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
	<div class="column">
		<Radar1></Radar1>
	</div>

	
</div>

<div class="columns">
	<div class="column">
		<doughnut></doughnut>
	</div>
	<div class="column">
		<bubble></bubble>
	</div>
	<div class="column">
		<polarar></polarar>
	</div>
	<div class="column">
		<scatterr></scatterr>
	</div>
</div>


</div>
</template>
<script>
	    import { Line } from 'vue-chartjs';
  import { Pie } from 'vue-chartjs';
   import { Bar } from 'vue-chartjs';
     import { Radar } from 'vue-chartjs';
    


import MonthlyIncome from './monthlyincome.vue'
import bar1 from './bar1.vue'
import pie1 from './pie1.vue'
import Radar1 from './Radar1.vue'
import doughnut from './doughnut.vue'
import bubble from './bubble.vue'
import polarar from './polarar.vue'
import scatterr from './scatterr.vue'
export default {

components: { MonthlyIncome,bar1,pie1,Radar1,doughnut,bubble,polarar,scatterr },

}


</script>
<style>
  .d1{}
</style>


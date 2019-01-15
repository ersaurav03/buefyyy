
<template>
<div>
<monthly-income :height="300" />
<bar1></bar1>
<pie1></pie1>
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


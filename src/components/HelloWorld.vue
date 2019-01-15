
<template>
<monthly-income :height="300" />
</template>
<script>
  import { Line } from 'vue-chartjs';
import MonthlyIncome from './monthlyincome.vue'
export default {

components: { MonthlyIncome },

}


</script>
<style>
  .d1{}
</style>


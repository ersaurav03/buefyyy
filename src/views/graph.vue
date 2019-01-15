<template>
<h1>JSMPJ</h1>
</template>

<script>
	import {Line } from 'vue-chartjs'
	export default Line.extend({
		mounted(){
			this.renderChart({
				labels:['Jan','Feb','Mar','Apr','May','Jun'],
				datasets: [
				{
					label:'MyActivities',backgroundColor:'blue',data:[40,33,22,11,56,99]
				}
				]
			},{responsive:true, maintainAspectRatio: false})
		}
	})
</script>
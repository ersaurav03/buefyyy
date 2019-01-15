
<template>
<monthly-income :data="test" />
</template>
<script>
import MonthlyIncome from './monthlyincome.vue'
export default {
data:function(){
return{
test:{
labels: ['January', 'February'],
datasets: [
{
label: 'Data One',
backgroundColor: '#f87979',
data: [40, 20]
}
]
}
}
 
},
components: { MonthlyIncome },
}
</script>


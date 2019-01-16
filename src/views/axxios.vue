<template>
	<div>
		<h1>JSMPJ quotes comes from: {{info}}</h1>
	</div>
</template>

<script>
	 import axios from 'axios'
	export default{
  
       data () {
    return {
      info: ''
    }
  },
  mounted () {
    axios
      .get('https://api.myjson.com/bins/w5ni4')
      .then(response => (this.info = response))
  }
	}

</script>
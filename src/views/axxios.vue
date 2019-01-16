<template>
  <div>
<h1>Part 1</h1>

<!-- <h6>{{info}}</h6> -->

  <div
    v-for="currency in info"
    class="currency"
  >
    {{ currency.data }}
    </div>


<!--  <h1> Part 2</h1>


  <h1>JSMPJ quotes comes from: {{info}}</h1>

      <h1>Bitcoin Price Index</h1>
  <div
    v-for="currency in info"
    class="currency"
  >
    {{ currency.description }}:
    <span class="lighten">
      <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
    </span>
  </div> -->





<!--  <h1>  part3</h1>

 <h1>Bitcoin Price Index</h1>

  <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>

    <div
      v-else
      v-for="currency in info"
      class="currency"
    >
      {{ currency.description }}:
      <span class="lighten">
        <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
      </span>
    </div>
</section> -->
  </div>
</template>

<script>
import axios from 'axios'
export default{
//part1
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.myjson.com/bins/1ci024')
      .then(response => (this.info = response))
  }


//Part 3
  // data () {
  //   return {
  //     info: null,
  //     loading: true,
  //     errored: false
  //   }
  // },
  // filters: {
  //   currencydecimal (value) {
  //     return value.toFixed(2)
  //   }
  // },
  // mounted () {
  //   axios
  //     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
  //     .then(response => {
  //       this.info = response.data.bpi
  //     })
  //     .catch(error => {
  //       console.log(error)
  //       this.errored = true
  //     })
  //     .finally(() => this.loading = false)
  // }

  //part2 
//   data () {
//     return {
//       info: ''
//     }
//   },
//     filters: {
//   currencydecimal (value) {
//     return value.toFixed(2)
//   }
// },
//   mounted () {
//     axios
//     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
//     .then(response => (this.info = response))
//   }
}

</script>
<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Stock from './Stock.vue'
import store from '../../store/store'

export default {
  computed: {
    ...mapGetters(
      { stocks: 'stockPortfolio' }
    )
  },
  components: {
    appStock: Stock
  }
}
</script>

<style>

</style>

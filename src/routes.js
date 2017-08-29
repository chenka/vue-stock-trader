import Home from './components/Home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stock from './components/stocks/Stocks.vue'

export default [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stock }
]
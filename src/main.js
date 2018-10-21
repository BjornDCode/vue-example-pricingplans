import Vue from 'vue'
import App from './App.vue'
import TransitionSlideUp from './components/transitions/TransitionSlideUp'

Vue.config.productionTip = false

Vue.filter('capitalise', value => {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.component('transition-slide-up', TransitionSlideUp)

new Vue({
  render: h => h(App)
}).$mount('#app')

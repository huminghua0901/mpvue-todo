import { Vue, Component } from 'vue-property-decorator'
const debug = require('debug')('log:App')

declare module "vue/types/vue" {
  interface Vue {
    $mp: any;
  }
}

@Component({
  mpType: 'app', // mpvue特定
}as any)
class App extends Vue {
  // app hook
  onLaunch() {
    let opt = this.$root.$mp.appOptions
    debug('onLaunch', opt)
  }

  onShow() {
    debug('onShow')
  }

  onHide() {
    debug('onHide')
  }

  mounted() { // vue hook
    debug('mounted')
  }
}
  
  export default App
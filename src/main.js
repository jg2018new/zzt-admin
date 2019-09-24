import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {getRequest} from './utils/api'
import {postRequest} from './utils/api'
import {deleteRequest} from './utils/api'
import {putRequest} from './utils/api'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.putRequest = putRequest;

router.beforeEach((to, from, next)=> {
      if (to.name == 'Login') {
        next();
        return;
      }
      var name = store.state.user.name;
      if (name == '未登录') {
        if (to.meta.requireAuth || to.name == null) {
          next({path: '/', query: {redirect: to.path}})
        } else {
          next();
        }
      } else {
        // initMenu(router, store);
        next('/home');
      }
    }
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

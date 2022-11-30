// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import About from './components/About'
import Customers from './components/Customers'
import CustomerInfo from './components/CustomerInfo'
import Add from './components/Add'
import Edit from './components/Edit'
import VueRouter from 'vue-router'


//使用路由
Vue.use(VueRouter)
//定义全局参数
Vue.prototype.$users = [{id: '001',name: 'jc',phone: 13222,email: '222',profession:'打豆豆',personalMsg:'你在干什么'},
  {id: '002',name: 'jc',phone: 13222,email: '222',profession:'打豆豆',personalMsg:'你在干什么'},
  {id: '003',name: 'jc',phone: 13222,email: '222',profession:'打豆豆',personalMsg:'你在干什么'},
  {id: '004',name: 'jc',phone: 13222,email: '222',profession:'打豆豆',personalMsg:'你在干什么'},
  {id: '005',name: 'jc',phone: 13222,email: '222',profession:'打豆豆',personalMsg:'你在干什么'}
]
//设置路由
const router =new VueRouter({
  routes:[
    {path:"/",component:Customers},
    {path:"/about",component:About},
    {path:"/add",component:Add},
    //传递一个id 根据id来查询内容
    {path:"/customerInfo/:id",component:CustomerInfo},
    {path:"/edit/:id",component:Edit},

  ],
  mode:"history"
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})

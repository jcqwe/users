<template>
  <div id="add">
    <div class="container">
      <div class="row">
        <router-link class="btn btn-default" to="/" style="text-align: left">返回</router-link>
      </div>
      <Alert v-if="alert" :message="alert"></Alert>
      <h2 class="page-header">编辑用户</h2>
      <form @submit="updateUser">
        <div class="well">
          <h4>用户信息</h4>
          <div class="form-group">
            <label>姓名</label>
            <input type="text" class="form-control" placeholder="name" v-model="customer.name">
          </div>
          <div class="form-group">
            <label>电话</label>
            <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
          </div>
          <div class="form-group">
            <label>邮箱</label>
            <input type="text" class="form-control" placeholder="email" v-model="customer.email">
          </div>
          <div class="form-group">
            <label>职业</label>
            <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
          </div>
          <div class="form-group">
            <label>个人简介</label>
            <textarea class="form-control" rows="10" placeholder="personalMsg" v-model="customer.personalMsg">

            </textarea>
          </div>
          <button type="submit" class="btn btn-info">提交</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Alert from './Alert'

export default {
  name: "add",
  components: {Alert},
  data() {
    return {
      customer: {},
      alert: ''
    }
  },
  methods: {
    //根据用户id查询用户信息
    fetchCustomers(id) {
      this.$users.forEach((user) => {
        if (user.id === id) this.customer = user
      })
    },
    updateUser(user) {
      //要求用户名/电话/邮箱不能为空
      if (!this.customer.name || !this.customer.phone || !this.customer.email) {
        console.log(222)
        this.alert = "必填项不能为空";
      } else {
        let upCustomer = {
          id: this.customer.id,
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email,
          profession: this.customer.profession,
          personalMsg: this.customer.personalMsg
        }
        //在全局参数users里面更改元素
        this.$users.forEach((user) => {
          if (user.id === upCustomer.id) user = upCustomer
        })
        //更新成功了之后，就让它跳转到主页面中
        this.$router.push({path: '/', query: {alert: "用户信息更新成功!"}});
        //preventDefault() 方法阻止元素发生默认的行为。
        user.preventDefault();
      }
      user.preventDefault();
    }
  },
  //事件、数据代理初始化后执行该函数，获取页面跳转时的参数
  created() {
    this.fetchCustomers(this.$route.params.id);
  }
}
</script>

<style scoped>
div.row {
  text-align: left;
  margin-left: 5px;
}

form {
  text-align: left;
}
</style>

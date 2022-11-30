<template>
  <div id="customerInfo" class="container">
    <div class="row">
      <router-link class="btn btn-default" to="/" style="text-align: left">返回</router-link>
    </div>
    <h1>内容详细界面</h1>
    <h2 class="page-header">
      <span><i class="glyphicon glyphicon-user"></i> {{ customer.name }}</span>
      <span class="pull-right">
         <router-link class="btn btn-primary" :to=" '/edit/' + customer.id">编辑</router-link>
         <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
       </span>

    </h2>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-phone"> {{ customer.phone }}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-envelope"> {{ customer.email }}</span>
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk"> {{ customer.profession }}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-book"> {{ customer.personalMsg }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "customerInfo",
  data() {
    return {
      customer: {}
    }
  },
  methods: {
    //根据用户id查询用户信息
    fetchCustomers(id) {
      this.$users.forEach((user) => {
        if (user.id === id) this.customer = user
      })
    },
    //根据用户id删除用户信息
    deleteCustomer(id) {
      this.$users.forEach((user, index) => {
        if (user.id === id) this.$users.splice(index, 1)
        //删除成功了之后，跳转到主页面中
        this.$router.push({path: '/', query: {alert: "用户删除成功!"}});
      })
    }
  },
  created() {
    console.log(this.$route.params.id, 111)
    this.fetchCustomers(this.$route.params.id);
  }
}
</script>

<style scoped>
div.row, h2.page-header {
  text-align: left;
  margin-left: 5px;
}

ul li {
  text-align: left;
}
</style>

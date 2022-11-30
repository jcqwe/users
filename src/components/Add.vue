<template>
  <div id="add">
    <div class="container">
      <div class="row">
        <router-link class="btn btn-default" to="/" style="text-align: left">返回</router-link>
      </div>
      <Alert v-if="alert" :message="alert"></Alert>
      <h2 class="page-header">添加用户</h2>
      <form @submit="addCustomer">
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
    //注册声明组件
    components: {Alert},
    data(){
      return {
        customer:{},
        alert:''
      }
    },

    methods:{
      //添加用户
      addCustomer(e){
          //要求用户名/电话/邮箱不能为空
          if(!this.customer.name || !this.customer.phone || !this.customer.email){
            this.alert="必填项不能为空！";
          }else{
            //从全局变量中获取当前用户列表最后元素的id
            let lastUserId = this.$users[this.$users.length - 1].id

            //需要拼接几个0
            let newUserId = parseInt(lastUserId) + 1
            let length = newUserId.toString().length
            let resUserId
            if(length === 1){
              resUserId = '00' + newUserId
            }else if(length === 2){
              resUserId = '0' + newUserId
            }else if(length === 3){
              resUserId = newUserId
            }
            console.log(lastUserId,'1')
            console.log(newUserId,'2')
            let newCustomer={
              id: resUserId,
              name:this.customer.name,
              phone:this.customer.phone,
              email:this.customer.email,
              profession:this.customer.profession,
              personalMsg:this.customer.personalMsg
            }
            //在全局参数users里面添加元素
            this.$users.push(newCustomer)
            //添加成功了之后，就让它跳转到主页面中  query:{}  传递的是一个对象
            this.$router.push({path:'/',query:{alert:"用户信息添加成功!"}});
            e.preventDefault();
          }
          e.preventDefault();
      }
    }
  }
</script>

<style scoped>
  div.row{
    text-align: left;
    margin-left: 5px;
  }
  form{
    text-align: left;
  }
</style>

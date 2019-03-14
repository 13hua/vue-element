<!--  -->
<template>
  <div class="user-dropdown-command">
    <el-dropdown @command="userDropdownCommand">
      <div class="user-head">
        <img class="head-img" src="@/assets/img/logo.png" alt="">
        <span class="users-name">admin</span>
      </div>
      <el-dropdown-menu slot="dropdown" >
        <el-dropdown-item v-for="item in userDropdownList" :key="item.id" :command="item.id" :divided="item.id===3?true:false">
          <i class="iconfont" :class="item.icon"></i>
          <span>{{item.title}}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userDropdownList: [
        { id: 1, title: '个人中心', icon: 'icon-user' },
        { id: 2, title: '个人设置', icon: 'icon-setting' },
        { id: 3, title: '退出登录', icon: 'icon-login' }
      ]
    };
  },

  components: {},

  computed: {},

  // mounted: {},

  methods: {
    userDropdownCommand(command) {
      console.log('command=', command);
      switch (command) {
        case 1:
          break;
        case 2:
          break;
        case 3:
          this.$router.push('/login');
          break;
      }
    }
  }
};
</script>
<style lang='less' scoped>
.user-dropdown-command {
  .user-head {
    height: 50px;
    cursor: pointer;

    .head-img {
      width: 44px;
      background: #fff;
      border-radius: 22px;
      margin-right: 10px;
      margin-top: 10px;
    }
    .users-name {
      vertical-align: top;
      line-height: 60px;
    }
  }
}
</style>
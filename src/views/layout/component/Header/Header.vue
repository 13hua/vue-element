<!--  -->
<template>
  <div class="header">
    <el-row :gutter="10">
      <el-col :span="2">
        <!-- sidebar 展开折叠按钮 -->
        <div class="grid-content bg-purple toggle-side-btn" @click="toggleSideBar">
          <i class="iconfont menu-fold" :class="sidebar.opened?'icon-menu-fold':'icon-menu-unfold'"></i>
        </div>
      </el-col>
      <el-col :span="22" class="header-right">
        <!-- history -->
        <router-history /> 
        <div class="right-content">
          <!-- search -->
          <div class="search-wrap">
            <el-input placeholder="站内搜索" prefix-icon="el-icon-search" v-model="searchValue" @keyup.enter.native="search">
            </el-input>
          </div>
          <!-- user head img dropdown -->
          <user-dropdown-command />
        </div>
        
        
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import RouterHistory from './component/RouterHistory';
import UserDropdownCommand from './component/UserDropdownCommand';

export default {
  data() {
    return {
      searchValue: ''
    };
  },

  components: { RouterHistory, UserDropdownCommand },

  computed: {
    ...mapGetters(['sidebar'])
  },

  mounted() {
    // this.getRouterPath();
  },

  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar');
      console.log('this.$store.sidebar===', this.$store.sidebar);
    },

    search() {
      console.log('search');
      this.$message(`站内搜索${this.searchValue}`);
    }
  }
};
</script>
<style lang='less' scoped>
.header {
  .toggle-side-btn {
    text-align: left;
    line-height: 60px;
  }
  .header-right {
    display: flex;
    justify-content: space-between;
    .right-content {
      display: flex;
      justify-content: flex-end;
    }
    .search-wrap {
      margin: 10px 20px 0 20px;
      .el-input {
        width: auto;
      }
    }
  }
}
</style>
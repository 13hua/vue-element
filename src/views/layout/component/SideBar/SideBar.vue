<!--  -->
<template>
  <div class="sidebar" :class="sidebar.opened?'open-sidebar':'hide-sidebar'">
    <el-aside>
      <el-menu  background-color="#001529" text-color="#909399" :unique-opened="true" mode="vertical" :default-active="$route.path" :router="true" :collapse="isCollapse" >
        <sidebar-item v-for="(item,index) in  routes" :key="index" :item="item" />
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
import SidebarItem from './SideBarItem';
import { routes } from '@/router';
import { mapGetters } from 'vuex';
console.log('Router=', routes);

export default {
  data() {
    return {
      // isCollapse: this.$store.isCollapse,
      routes: []
    };
  },

  components: { SidebarItem },

  computed: {
    ...mapGetters(['sidebar']),
    isCollapse() {
      return !this.sidebar.opened;
    }
  },

  mounted() {
    console.log('routes=', routes);
    console.log('this.$store.isCollapse', this.$store.isCollapse);
    this.routes = routes;
  },

  methods: {}
};
</script>

<style lang='less' scoped>
.sidebar {
  z-index: 10;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  transition: width 0.5s;

  &.open-sidebar {
    width: 210px;
  }
  &.hide-sidebar {
    width: 64px;
  }

  .el-aside {
    width: 100% !important;
    height: 100vh;
    max-height: 100vh;
    background: #001529;
    color: #bfcbd9;
    line-height: 60px;
    text-align: left;
    .el-menu {
      border-right: 0;
    }
  }

  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar {
    width: 1px;
    height: 1px;
    background-color: #f5f5f5;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
}
</style>
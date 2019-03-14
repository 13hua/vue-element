<!--  -->
<template>
  <div class="router-history">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item,index) in routerHistory" :key="index"  :to="{ path: item.path }">{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routerHistory: []
    };
  },

  components: {},

  watch: {
    $route() {
      this.getRouterPath();
      console.log('route ', this.$route.path);
    }
  },

  computed: {},

  // mounted: {},
  created() {
    this.getRouterPath();
  },

  methods: {
    getRouterPath() {
      let matched = this.$route.matched.filter(item => item.name);
      let dashBoardRouter = [{ path: '/', meta: { title: 'Dashboard' } }];
      this.routerHistory =
        matched[0].meta.title !== 'Dashboard'
          ? [...dashBoardRouter, ...matched]
          : matched;
      console.log('matched=', matched);
      console.log('this.routerHistory=', this.routerHistory);
    }
  }
};
</script>
<style lang='less' scoped>
.router-history {
  .el-breadcrumb {
    line-height: 60px;
  }
}
</style>
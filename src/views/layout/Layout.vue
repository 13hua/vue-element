<!--  -->
<template>
  <div class="layout">
    <el-container>
      <side-bar />
      <el-container>
        <el-header>
          <my-header />
        </el-header>
        <el-main>
          <my-main />
        </el-main>
        <el-footer>
          <my-footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideBar from './component/SideBar/SideBar';
import MyHeader from './component/Header/Header';
import MyMain from './component/Main/Main';
import MyFooter from './component/Footer/Footer';

export default {
  data() {
    return { show: true };
  },

  components: { SideBar, MyHeader, MyMain, MyFooter },

  computed: {},

  // mounted: {},

  methods: {}
};
</script>
<style lang='less' scoped>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  // transition: all 0.3s ease;
  transition: width 2s;
}
.slide-fade-leave-active {
  // transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transition: width 2s;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  // transform: translateX(100px);
  // opacity: 0;
  transition: width 0;
}

.layout {
  .el-header,
  .el-footer {
    display: block;
    height: 60px;
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  }

  .el-main {
    background-color: #f0f2f5;
    color: #333;
    text-align: center;
  }
}
</style>
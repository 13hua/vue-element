<!--  -->
<template>
  <div class="sidebar-item">
    <!-- 有子级菜单 -->
    <el-submenu :index="item.path" v-if="hasChildren(item)">
      <template slot="title" v-if="item.meta && item.meta.title" @open="handleOpen" @close="handleClose">
        <i class="el-icon-message iconfont" :class="item.meta.icon"></i>
        <span>{{item.meta.title}}</span>
      </template>
      <sidebar-item v-for="(value,index) in item.children" :key="index" :item="value" :curPath="item.path" />
    </el-submenu>
    
    <!-- 没有子级的菜单 -->
    <template  v-else>
      <el-menu-item :index="resolvePath(curPath,item.path)" >
        <i v-if="item.meta.icon" class="el-icon-message iconfont" :class="item.meta.icon"></i>
        <span slot='title'>{{item.meta.title}}</span>
      </el-menu-item>
    </template>

    <!-- 子级菜单 -->
    <!-- <template  v-else>
      <el-menu-item :index="resolvePath(curPath,item.path)" >
        <span slot='title'>{{item.meta.title}}</span>
      </el-menu-item>
    </template> -->

  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  data() {
    return {};
  },

  props: {
    item: {
      type: Object
    },
    curPath: {
      type: String,
      default: '/'
    }
  },

  components: {},

  computed: {
    // console.log('item=', this.item);
  },

  mounted() {
    console.log('item=', this.item);
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log('handleOpen', key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log('handleClose', key, keyPath);
    },
    hasChildren(obj) {
      return obj.hasOwnProperty('children') && obj.children.length > 1;
    },
    onlyOneChild(obj) {
      return obj.hasOwnProperty('children') && obj.children.length === 1;
    },
    resolvePath(path, childPath) {
      console.log(path, childPath);
      if (path === '/') {
        if (/\//g.test(childPath)) {
          return `${childPath}`;
        }
        return `${path}${childPath}`;
      } else if (childPath === '') {
        return `${path}`;
      }

      return `${path}/${childPath}`;
    }
  }
};
</script>
<style lang='less' scoped>
.sidebar-item {
  &:hover {
    opacity: 0.78;
  }
}
</style>
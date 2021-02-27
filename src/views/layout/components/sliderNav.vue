<template>
  <div class="top-nav">
    <div class="left">
      <a-button type="primary" @click="toggleCollapsed">
        <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-button>
      <div class="breadcrumb">
        <a-breadcrumb v-if="currentRoute.length > 1">
          <a-breadcrumb-item>
            {{currentRoute[0] ? currentRoute[0].meta.title: ''}}
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <router-link :to="{name: currentRoute[1].name}">
              {{currentRoute[1] ? currentRoute[1].meta.title: ''}}
            </router-link>
          </a-breadcrumb-item>
        </a-breadcrumb>
      </div>
    </div>
    <ul class="user-info">
      <li class="user-name">
        {{$store.state.user.username}}
        <a-icon type="down" />
      </li>
      <li class="login-out" @click="logout">退出</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentRoute: this.$router.currentRoute.matched,
    };
  },
  watch: {
    $route() {
      this.currentRoute = this.$router.currentRoute.matched;
    },
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
    logout() {
      this.$store.dispatch('logout');
      this.$router.push({
        name: 'Login',
      });
    },
  },
};
</script>
<style lang="less" scoped>
  .top-nav {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    position: relative;
    z-index: 100;
    .left {
      display: flex;
      align-items: center;
      .breadcrumb {
        margin-left: 10px;
      }
    }
    .user-info {
      height: 100%;
      line-height: 50px;
      text-align: center;
      cursor: pointer;
      li {
        height: 100%;
        padding: 0 30px;
        &:not(:first-of-type) {
          display: none;
          background-color: #f5f5f5;
          &:hover {
            background-color: #1890ff;
            color: #fff;
            font-weight: bold;
          }
        }
      }
      &:hover li {
        display: block;
      }
    }
  }
</style>

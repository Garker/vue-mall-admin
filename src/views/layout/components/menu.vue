<template>
  <div class="menu-list">
    <a-menu
      :default-selected-keys="[$router.currentRoute.matched[1] ?
                                $router.currentRoute.matched[1].name :
                                '']"
      :default-open-keys="[$router.currentRoute.matched[0].name]"
      mode="inline"
      theme="dark"
      :inline-collapsed="$store.state.collapsed"
    >
      <a-sub-menu v-for="router in $store.state.menuRoutes" :key="router.name">
        <span slot="title"><a-icon :type="router.meta.icon"/>
          <span>{{router.meta.title}}</span>
        </span>
        <template  v-for="child in router.children">
          <a-menu-item v-if="!child.meta.hidden"  :key="child.name">
            <router-link :to="{name: child.name}">
              <a-icon :type="child.meta.icon" />
              {{child.meta.title}}
            </router-link>
          </a-menu-item>
        </template>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

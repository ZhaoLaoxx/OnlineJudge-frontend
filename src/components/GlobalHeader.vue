<template>
  <div id="globalHeader">
    <a-menu
      mode="horizontal"
      :selected-keys="selectedKeys"
      @menu-item-click="doMenuClick"
    >
      <a-menu-item
        key="0"
        :style="{ padding: 0, marginRight: '38px' }"
        disabled
      >
        <div class="title-bar">
          <img class="logo" src="../assets/oj-logo.png" style="height: 100px" />
          <div class="title">OnlineJudge</div>
        </div>
        <div
          :style="{
            width: '80px',
            height: '30px',
            borderRadius: '2px',
            cursor: 'text',
          }"
        />
      </a-menu-item>
      <a-menu-item v-for="item in routes" :key="item.path">
        {{ item.name }}
      </a-menu-item>
    </a-menu>
  </div>
</template>
<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: #444;
  margin-left: 16px;
}
</style>
<script setup lang="ts">
import { routes } from "../router/routes";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
// 路由跳转时，更新选中的菜单项
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});
// 默认主页
const selectedKeys = ref(["/"]);
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

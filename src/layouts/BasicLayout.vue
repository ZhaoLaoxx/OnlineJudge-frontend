<template>
  <div id="BasicLayout">
    <a-layout style="height: 400px">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">底部</a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#BasicLayout {
}

#BasicLayout .header {
  background: red;
  margin-bottom: 16px;
}

#BasicLayout .content {
  background: linear-gradient(to right, #bbb, #fff);
  margin-bottom: 16px;
}

#BasicLayout .footer {
  background: #efefef;
  padding: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script>
import GlobalHeader from "@/components/GlobalHeader.vue";

export default {
  components: { GlobalHeader },
};
</script>

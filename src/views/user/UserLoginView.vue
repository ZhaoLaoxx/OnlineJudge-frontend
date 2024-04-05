<template>
  <div class="userLoginView">
    <h2 style="margin-bottom: 16px">login in OnlineJudge</h2>
    <a-form
      style="max-width: 480px; margin: 0 auto"
      label-align="left"
      auto-label-width
      :model="form"
      @submit="handleSubmit"
    >
      <a-form-item
        field="userAccount"
        tooltip="Please enter username"
        label="账号"
      >
        <a-input
          v-model="form.userAccount"
          placeholder="please enter your
        username..."
        />
      </a-form-item>
      <a-form-item field="userPassword" label="密码">
        <a-input-password
          v-model="form.userPassword"
          placeholder="please enter your post..."
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { UserLoginRequest, UserControllerService } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const form = reactive({
  userAccount: "",
  userPassword: "",
} as UserLoginRequest);
const route = useRouter();
const store = useStore();
const handleSubmit = async () => {
  const res = await UserControllerService.userLoginUsingPost(form);
  // 登录成功，跳转到主页
  if (res.code === 0) {
    // alert("登录成功" + JSON.stringify(res.data));
    await store.dispatch("user/getLoginUser");
    route.push({
      path: "/",
      replace: true,
    });
  } else {
    message.error("登录失败, " + res.message);
  }
  alert(JSON.stringify(form));
};
</script>

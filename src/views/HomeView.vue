<template>
  <div class="home">
    <CodeEditor :value="codeValue" :handle-change="onCodeChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MdEditor from "@/components/MdEditor.vue";
import CodeEditor from "@/components/CodeEditor.vue"; // @ is an alias to /src

const mValue = ref();
const codeValue = ref();
const onMChange = (v: string) => {
  mValue.value = v;
};
const onCodeChange = (v: string) => {
  codeValue.value = v;
};
</script>

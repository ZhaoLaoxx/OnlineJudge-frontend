<template>
  <div id="code-editor" ref="codeEditorRef" style="min-height: 400px" />
  <a-button @click="fillValue">填充值</a-button>
</template>

<script setup lang="ts">
import * as monaco from "monaco-editor";
import { onMounted, ref, toRaw, withDefaults, defineProps } from "vue";

const codeEditorRef = ref();
const codeEditor = ref();
const value = ref("hello world");

/**
 * 定义组件属性Leix
 */
interface Props {
  value: string;
  handleChange: (v: string) => void;
}

/**
 * 给组件指定初始值
 */
const props = withDefaults(defineProps<Props>(), {
  value: () => "",
  handleChange: (v: string) => {
    console.log(v);
  },
});
const fillValue = () => {
  if (!codeEditor.value) {
    return;
  }
  // 改变值
  toRaw(codeEditor.value).setValue("新的值");
};
onMounted(() => {
  if (!codeEditorRef.value) {
    return;
  }
  codeEditor.value = monaco.editor.create(codeEditorRef.value, {
    value: value.value,
    language: "cpp",
    automaticLayout: true,
    colorDecorators: true,
    minimap: {
      enabled: true,
    },
    readOnly: false,
    theme: "vs-dark",
  });
  // 编辑 监听内容变化
  codeEditor.value.onDidChangeModelContent(() => {
    console.log("目前内容为：", toRaw(codeEditor.value).getValue());
  });
});
</script>

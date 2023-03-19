<template>
  <div class="material-index">
    <el-input v-model="input" placeholder="Please input" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>

<style lang="scss" scoped>
.material-index {
  min-width: 700px;
  :deep(.el-tabs) {
    height: calc(100vh - 180px);
    display: flex;
    flex-direction: column;
    .el-tabs__header {
      margin-bottom: 0 !important;
    }
    .el-tabs__content,
    .el-tab-pane {
      min-height: 0;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>

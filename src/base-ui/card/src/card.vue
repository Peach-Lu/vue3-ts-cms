<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: () => 'Title'
  }
})
</script>

<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ props.title }}</span>
      </div>
    </template>
    <div class="item">
      <slot></slot>
    </div>
  </el-card>
</template>

<style lang="less" scoped>
.box-card {
  &:deep(.el-card_header) {
    padding: 10px 20px !important;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
  }
  .item {
    margin-bottom: 10px;
  }
}
</style>

<template>
  <div class="user">
    <div class="search">
      <HBForm v-bind="searchFormConfig" />
    </div>
  </div>
  <div class="content"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HBForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: {
    HBForm
  },
  setup() {
    return { searchFormConfig }
  }
})
</script>

<style scoped lang="less"></style>

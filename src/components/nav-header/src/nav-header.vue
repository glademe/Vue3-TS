<template>
  <div class="nav-header">
    <div class="content">
      <i class="fold-menu"></i>
      <div>面包屑</div>
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserInfo from './user-info.vue'
export default defineComponent({
  components: {
    UserInfo
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>

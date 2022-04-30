<template>
  <div class="login">
    <LoginPanel />
  </div>
</template>

<script>
import LoginPanel from './cpns/login-panel.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.login {
  display: flex;
  // 对齐方式
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>

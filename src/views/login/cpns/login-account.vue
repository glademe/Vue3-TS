<template>
  <div class="loginAccount">
    <el-form :model="ruleForm" :rules="rules" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus/es'
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
import localCache from '@/utils/cache'
export default defineComponent({
  setup() {
    const store = useStore()
    const ruleForm = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    //编写好规则
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        //执行登录逻辑
        if (valid) {
          //1、判断是否需要记住密码
          if (isKeepPassword) {
            //本地缓存
            localCache.setCache('name', ruleForm.name)
            localCache.setCache('password', ruleForm.password)
          } else {
            localCache.removeCache('name')
            localCache.removeCache('password')
          }
          //2、登录验证
          store.dispatch('loginModule/accountLoginAction', { ...ruleForm })
        }
      })
    }
    return {
      ruleForm,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>

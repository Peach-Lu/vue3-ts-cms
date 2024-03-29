//引入vue里面的App类型 或者在eslintrc.js 里面设置 '@typescript-eslint/no-explicit-any': 'off'
import { App } from 'vue'
import registerElement from '@/global/register-element'
import registerProperties from './register-properties'
export function registerApp(app: App): void {
  registerElement(app) //调用函数注册
}
// 通过app.use() 默认传入install(app)
export function golbalRegisterApp(app: App): void {
  registerElement(app) //调用函数注册
  registerProperties(app)
}

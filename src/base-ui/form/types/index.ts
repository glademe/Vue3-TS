type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  //针对select
  options?: any[]
  otherOptions?: any
}

export interface IFormConfig {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout: any
  itemLayout: any
}

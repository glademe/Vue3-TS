import axiosRequest from '../index'
import { IAccount } from './types'
import { IDataType, ILoginResult } from './types'
import { LoginAPI } from './constEnum'
export function accountLoginRequest(account: IAccount) {
  return axiosRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number): any {
  return axiosRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestMenuByRoleId(id: number): any {
  return axiosRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}

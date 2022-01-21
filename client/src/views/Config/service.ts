import { Notification } from 'element-ui'
import { NConfig } from './types'

export default class ConfigService implements NConfig.IView, NConfig.IService {
  data!: NConfig.IData

  /** 动态注册的函数 */
  callbacks: Partial<NConfig.ICallbacks> = {}

  constructor (data?: Partial<NConfig.IData>) {
    this.setData(data === undefined ? {} : data)
  }

  load () {

    const host = localStorage.getItem('host') || ''
    const token = localStorage.getItem('token') || ''

    const data = this.data = {
      host,
      token,
    }

    return data
  }

  save (): void {
    localStorage.setItem('host', this.data.host)
    localStorage.setItem('token', this.data.token)
    Notification.success('保存成功')
  }

  /** 获取默认数据 */
  private getDefaultData (): NConfig.IData {
    return {
      host: '',
      token: '',
    }
  }

  /** 获取数据 */
  getData () {
    return this.data
  }

  /** 设置数据 */
  setData (data: Partial<NConfig.IData>) {
    this.data = { ...this.getDefaultData(), ...data }
  }

  destroy () {
    this.callbacks = {}
  }
}

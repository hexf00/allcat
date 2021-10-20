import store from '@/store'
import WsManager from '@/plugins/WsManager'
import { ApiService } from '@/services/Api/service'
import { WsService } from '@/services/Ws/service'
import { IWs } from '@/services/Ws/types'
import { NApp } from './types'
import appHelper from '@/models/appHelper'

export default class AppService implements NApp.IView {
  data!: NApp.IData

  /** 动态注册的函数 */
  callbacks = {}

  app = appHelper.get()
  wsManager = new WsManager('ws://127.0.0.1:5920/message')
  apiService = new ApiService(this.app)
  wsService: IWs = new WsService(this.wsManager, this.apiService)

  constructor () {
    store.currentApp = this.app
  }

  /** 获取默认数据 */
  private getDefaultData (): NApp.IData {
    return {
      data: {},
    }
  }

  getData () {
    return this.data
  }

  setData (data: Partial<NApp.IData>) {
    this.data = { ...this.getDefaultData(), ...data }
  }
}

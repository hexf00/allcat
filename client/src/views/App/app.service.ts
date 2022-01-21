import store from '@/store'
import WsManager from '@/plugins/WsManager'
import { ApiService } from '@/services/Api/service'
import { WsService } from '@/services/Ws/service'
import { IWs } from '@/services/Ws/types'
import { NApp } from './types'
import appHelper from '@/models/appHelper'
import DataService from '@/services/Data/Data.service'
import ConfigService from '../Config/service'
import { Notification } from 'element-ui'

export default class AppService implements NApp.IView, NApp.IService {
  data!: NApp.IData

  /** 动态注册的函数 */
  callbacks = {}

  app = appHelper.get()
  wsManager = new WsManager('ws://127.0.0.1:5920/message')
  apiService = new ApiService(this.app)
  wsService: IWs = new WsService(this.wsManager, this.apiService)

  dataService = new DataService()

  constructor () {
    this.init()
  }

  config = new ConfigService()

  /** 获取默认数据 */
  private getDefaultData (): NApp.IData {
    return {
      app: {},
    }
  }

  getData () {
    return this.data
  }

  setData (data: Partial<NApp.IData>) {
    this.data = { ...this.getDefaultData(), ...data }
  }

  init () {
    const config = this.config.load()

    if (!config.host) {
      Notification.warning('请先配置服务端信息')
    }

    store.currentApp = this.app
    this.wsService.init()

    this.dataService.load('app')
  }

  destroy (): void {
    this.wsService.unset()
  }
}

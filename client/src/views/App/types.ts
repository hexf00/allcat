import { IJSONApp } from './../../models/appHelper'
import { IWs } from './../../services/Ws/types'
export type IAppData = {
  // TODO: 添加数据定义
}

export namespace NApp {
  export interface IData {
    /** 数据 */
    data: IAppData
  }

  /** 组件接口 */
  export interface IView {

    app: IJSONApp

    wsService: IWs

    /** 设置数据 */
    setData (data: Partial<IAppData>): void
  }

}
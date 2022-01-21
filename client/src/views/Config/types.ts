export namespace NConfig {
  export type IData = {
    host: string
    token: string
  }

  export type ICallbacks = {
  }

  export interface IView {
    /** 保存配置信息 */
    save (): void

    /** 数据 */
    data: IData

    /** 销毁函数 */
    destroy (): void
  }

  export interface IService {
    callbacks: Partial<ICallbacks>
    /** 数据 */
    data: IData

    /** 设置数据 */
    setData (data: Partial<IData>): void

    /** 销毁函数 */
    destroy (): void
  }
}

import { IJSONApp } from '@/models/appHelper'
export namespace NHeader {
  export type IData = {
    name: string
    description: string
  }

  export type ICallbacks = {
    validate: () => Promise<boolean>
  }

  export interface IView {
    /** 导出 */
    export (): void
    /** 导入 */
    import (data: IJSONApp): void
    /** 数据 */
    data: IData
  }

  export interface IService {
    callbacks: Partial<ICallbacks>
    /** 数据 */
    data: IData
  }
}

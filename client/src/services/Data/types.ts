import { IJSONApp } from '@/models/appHelper'
export namespace NData {
  export interface IService {
    load (spaceName: string): Promise<IJSONApp>
    save (spaceName: string, data: IJSONApp): Promise<true>
  }
}
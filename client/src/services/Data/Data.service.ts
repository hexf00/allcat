import { IJSONApp } from '@/models/appHelper'
import axios from 'axios'
import { NData } from './types'

const host = localStorage.getItem('host') || ''

export default class DataService implements NData.IService {
  load (spaceName: string): Promise<IJSONApp> {
    return axios.post(`${host}/load`, {
      spaceName,
    })
  }
  save (spaceName: string, data: IJSONApp): Promise<true> {
    return axios.post(`${host}/save`, {
      spaceName,
      data,
    })
  }
}
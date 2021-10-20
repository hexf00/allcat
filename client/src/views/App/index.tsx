import { CreateElement } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

import Index from '@/themes/element-ui'

import AppService from './app.service'
import { IAppData, NApp } from './types'

@Component
export default class App extends Vue {
  $props!: {
    value: IAppData
  }

  service: NApp.IView = new AppService()

  created () {
    this.service.wsService.init()
  }

  destroyed () {
    console.log('destroyed')
    this.service.wsService.unset()
  }

  render (h: CreateElement) {
    return (
      <Index app={this.service.app} />
    )
  }
}

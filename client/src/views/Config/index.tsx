import classnames from 'classnames'
import { CreateElement } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

import style from './index.module.scss'
import { NConfig } from './types'

@Component
export default class Config extends Vue {

  @Prop() service!: NConfig.IView

  beforeDestroy () {
    this.service.destroy()
  }

  render (h: CreateElement) {
    const service = this.service
    return (
      <div class={classnames(style.component)}>
        <h2>配置</h2>
        <div>
          server host: <input type="text" v-model={service.data.host} />
        </div>
        <div>
          token: <input type="text" v-model={service.data.token} />
        </div>
        <button onclick={() => service.save()}>保存</button>
      </div>
    )
  }
}

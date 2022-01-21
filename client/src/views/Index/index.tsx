import { Vue, Component } from 'vue-property-decorator'
import { CreateElement } from 'vue'

import ViewMenu from '@/views/Index/components/ui/ViewMenu/ViewMenu'
import TableView from '@/views/Index/components/ui/TableView'

import style from './index.module.scss'
import IndexService from './index.service'
import store from '@/store'
import Header from './components/Header'
import { NLayout } from './types'

@Component
export default class extends Vue {

  service: NLayout.IView = new IndexService(store.currentApp!)

  store = store

  beforeRouteEnter () {
    console.log('beforeRouteEnter', this)
  }

  beforeDestroy () {
    this.service.destroy()
  }

  render (h: CreateElement) {
    const service = this.service
    const { currentTable, currentView } = this.store

    return <div class={style.bg}>
      <Header service={service.header} />
      <div class={style.editor}>
        <ViewMenu service={service.viewMenuService} class={style.left}></ViewMenu>

        <div class={style.right}>
          {
            currentTable && currentView
            && <TableView table={currentTable} view={currentView} />
          }
        </div>

      </div>
    </div>
  }
}

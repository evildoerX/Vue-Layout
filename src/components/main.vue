<template>
  <Row class="main-content">
      <!-- <div class="header-box" >
        <div style="padding-top:10px;">选择模板：</div>
        <Tabs class="header-tab" value="name1">
            <TabPane label="组件分类1" name="name1">
            </TabPane>
            <TabPane label="组件分类2" name="name2">
            </TabPane>
            <TabPane label="组件分类3" name="name3">
            </TabPane>
            <TabPane label="组件分类3" name="name3">
            </TabPane>
            <TabPane label="组件分类3" name="name3">
            </TabPane>
            <TabPane label="组件分类3" name="name3">
            </TabPane>
            <TabPane label="组件分类3" name="name3">
            </TabPane>
            <TabPane label="组件分类3" name="name3">
            </TabPane>
            <TabPane label="组件分类3" name="name3">
            </TabPane>
            <TabPane label="组件分类3" name="name3">
            </TabPane>
        </Tabs>
      </div> -->
      <div class="components" :width="width.components" :tablet="width.components" :desktop="width.components">
          <components ref="components" />
          <!-- <Tabs value="name1">
            <TabPane label="基础组件" name="name1">
              <components ref="components" />
            </TabPane>
            <TabPane label="业务组件" name="name2">
              <components ref="components" />
            </TabPane>
            <TabPane label="页面组件" name="name3">
              <components ref="components" />
            </TabPane>
        </Tabs> -->
      </div>
      <Col span="24" class="preview" :width="width.preview" :tablet="width.preview" :desktop="width.preview">
        <preview ref="preview" />
      </Col>
      <Card class="attributes">
        <Tabs value="name1">
          <TabPane label="属性" name="name1">
            <attributes class="attributes-content" />
          </TabPane>
          <!-- <TabPane label="组件树" name="name2">
            <component-tree class="component-tree" :components="$store.state.components.filter(c=>!c.parentId)" />
          </TabPane> -->
        </Tabs>
      </Card>
  </Row>
</template>
<script>
import attributes from './attributes'
import components from './components'
import preview from './preview'
import componentTree from './componentTree.vue'
export default {
    name: 'app',
    data() {
        return {
            setting: {
                open: false,
                selectEffect: true
            },
            share: {
                open: false,
                url: '',
                experience: ''
            },
            selectField: {
                value: '属性'
            }
        }
    },
    mounted() {
        this.setSelectEffect(this.setting.selectEffect)
    },
    computed: {
        current: { //预览视图中选中的组件
            get() {
                return this.$store.state.currentComponent
            }
        },
        width: { //三栏的宽度设置
            get() {
                return this.$store.state.width[0]
            }
        },
        parentComponent: {
            get() {
                let component
                if (this.current.parentId)
                    component = this.$store.state.components.find(c => c.info.id === this.current.parentId)
                else
                    component = null
                return component
            }
        },
        components: {
            get() {
                return this.$store.state.components
            }
        }
    },
    watch: {
        components: {
            deep: true,
            handler(val, oldVal) {
                //布局修改后将分享的url设为空
                this.share.url = ''
                this.share.experience = ''
            }
        }
    },
    methods: {
        switchComponent() {
            let el = document.getElementById(this.parentComponent.info.id)
            el.click()
        },
        oprate(e) {
            // let components = await this.$store.dispatch('delComponent', this.current.info.id)
            // this.$refs.preview.fresh()
            this.$refs.preview.rightClick(e)

        },
        openUiDocument() {
            switch (this.current.info.ui) {
                case 'iView-UI':
                    return window.open('https://www.iviewui.com/components/' + this.current.info.name)
                default:
                    return this.$toast('无文档页')
            }
        },
        setSelectEffect(val) {
            let head = document.head
            let style = document.getElementById('vue-layout-style')
            if (!style) {
                style = document.createElement('style')
                style.id = 'vue-layout-style'
                style.type = 'text/css'
                head.appendChild(style)
            }

            let cssText
            if (val) {
                cssText = `[data-component-active="true"] {
                              box-shadow: inset 0px 0px 0px 1px pink!important;
                          }
                          [data-component-active]:hover {
                              box-shadow: inset 0px 0px 0px 1px pink!important;
                          }
                          [data-component-active]:focus {
                              box-shadow: inset 0px 0px 0px 1px pink!important;
                          }`
            } else {
                cssText = `[data-component-active="true"] {
                              box-shadow: none;
                              outline:none;
                          }
                          [data-component-active]:hover {
                              box-shadow: none;
                          }
                          [data-component-active]:focus {
                              box-shadow: none;
                          }`
            }
            let textNode = document.createTextNode(cssText)
            style.innerHTML = ''
            style.appendChild(textNode)
        },
        createShare() {
            let share = new this.$lean.Object('Share')
            share.set('store', this.$store.state)
            share.save().then(res => {
                this.share.url = location.origin + location.pathname + '#/share/' + res.id
                this.share.experience = location.origin + location.pathname + '#/preview/pc/' + res.id
            })
        }
    },
    components: {
        components,
        preview,
        attributes,
        componentTree,
    }
}
</script>

<style lang="less" scoped>
.header-box {
  display:flex;
  background: #c7c6c6;

}
.main-content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
}
.components {
  width: 200px;
  position: fixed;
  left: 80px;
  height: calc(100%);
  background: #eaedf1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 100;
}
.preview {
  padding: 0 200px 0 100px;
}
.attributes {
  position: fixed;
  right: 0;
  width: 400px;
  height: calc(100%);
  // background: #eaedf1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 100;
  border-radius: 0;
}
</style>

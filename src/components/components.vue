<template>
    <section>
        <mu-content-block style="display:flex;">
            <mu-select-field :value="activeUI" @change="handleTabChange" autoWidth>
                <mu-menu-item title="iView-UI" value="iView-UI">
                </mu-menu-item>
            </mu-select-field>
            <mu-sub-header style="white-space:nowrap;">- 组件</mu-sub-header>
        </mu-content-block>
        <div v-if="activeUI === 'iView-UI'">
            <ul class="components-list iview-ui">
                <li draggable="true" @dragstart="dragStart" data-name="Table">
                    <Table> </Table>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
import museUiList from './list/muse-ui'
import mintUiList from './list/mint-ui'
import iViewUiList from './list/iview-ui'
export default {
    name: 'components',
    data() {
        return {}
    },
    mounted() {

    },
    methods: {
        handleTabChange(val) {
            this.activeUI = val
        },
        getComponent(e) {
            if (!e)
                return
            if (e.localName !== 'li')
                return this.getComponent(e.parentElement)
            else
                return e
        },
        removeDom(e) {
            if (e && e.parentElement)
                e.parentElement.removeChild(e)
        },
        dragStart(e) {
            let componentName = e.target.getAttribute('data-name')
            let info = {
                name: componentName,
                ui: this.activeUI
            }
            e.dataTransfer.setData('info', JSON.stringify(info))
        }
    },
    computed: {
        activeUI: {
            get() {
                return this.$store.state.activeUI
            },
            set(val) {
                this.$store.commit('setState', {
                    activeUI: val
                })
            }
        }
    },
    components: {
        ...museUiList,
        ...mintUiList,
        ...iViewUiList
    }
}
</script>
<style lang="less" scoped>
.components-list {
    list-style: none;
    margin: 0;
    padding: 0;
}

.components-list * {
    cursor: move!important;
}

.components-list>li {
    min-height: 36px;
    font-size: 18px;
    -webkit-user-select: none;
    // transform: scale(0.7);
    padding-bottom: 10px;
    transition: all .2s;
    &:hover {
        transform: scale(1.4);
    }
    i {
        vertical-align: middle;
    }
}

.components-list.iview-ui >li {
    transform: scale(0.8)translateX(-1%);
    &:hover {
        transform: scale(0.9)translateX(1%);
    }
}
</style>

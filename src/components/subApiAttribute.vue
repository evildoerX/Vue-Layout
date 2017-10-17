<template>
    <div style="padding-left:10px;">
        <!-- 组件的attributes中包含了组件的属性，如：
             attributes = {
                label: {
                    type:'text',
                    value:'按钮'
                }
            }-->
        <div v-if="attr" v-for="(v,k,i) in attr">
            <apiform v-if="v.type==='Array'" v-model="v.value" :values="v.value" @clickaddtable="clickaddtable"></apiform>
        </div>
    </div>
</template>
<script>
import arrayform from './components/ArrayForm'
import iconPicker from './iconPicker'
import colorPicker from './colorPicker'
import ioniconPicker from './ioniconPicker'
import apiform from '../components/components/APIForm'
export default {
    name: 'subAttributes',
    data() {
        return {
            attr: {}
        }
    },
    props: {
        attributes: {
            type: Object,
            default: null
        },
        keyOfAttr: {
            type: String,
            default: null
        }
    },
    created() {
        this.attr = JSON.parse(JSON.stringify(this.attributes))
    },
    watch: {
        attributes: {
            deep: true,
            handler(val, oldVal) {
                this.attr = JSON.parse(JSON.stringify(val))
                // console.log(this.attr)
            }
        }
    },
    methods: {
        subUpdate(attr) { //收到了子组件的更新
            Object.assign(this.attr, attr)
            this.updateAttribute()

        },
        updateAttribute() { //提交更新到父组件
            if (this.keyOfAttr)
                this.$emit('update', {
                    [this.keyOfAttr]: {
                        children: this.attr
                    }
                })
            else this.$emit('update', this.attr)
        },
        clickaddtable(data){
            console.log('ch3.....', data)
           
            let josnstr = JSON.stringify(data)
            josnstr = josnstr.replace(/"/g, '\'')
            josnstr = josnstr.replace(/\'title\'/g, 'title')
            josnstr = josnstr.replace(/\'key\'/g, 'key')
             console.log('ch4.....', josnstr)
            this.attr.columns.value = josnstr
            this.updateAttribute()
            // console.log('ch5.....', this.attr.columns.value)
        }
    },
    components: {
        iconPicker,colorPicker,ioniconPicker,arrayform,apiform
    }
}
</script>

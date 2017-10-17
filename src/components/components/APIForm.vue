<template>
    <div>
        <h4>接口：</h4>
        <div style="display:flex;margin-bottom:10px;margin-top:10px;">
            <Select v-model="apiname" filterable placeholder="输入进行搜索API" @on-change="showapiinfo">
                <Option v-for="item in apiList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Button style="margin-left:10px;">增加</Button>
        </div>
        <div v-if="apiname !== ''">
            <h4 style="margin-bottom:10px">数据绑定：</h4>
            <table>
                <thead>
                    <tr>
                        <th>表头</th>
                        <th>数据源</th>
                    </tr>
                </thead>
                <tbody v-for="(item, index) in items" :key="index">
                    <tr v-if="item.type !== 'selection'">
                        <td>{{item.title}}</td>
                        <td>
                            <Select style="margin-left:30px;" v-model="apipropsname" filterable placeholder="输入进行搜索API" @on-change="showapiinfo">
                                <Option v-for="item in apipropsList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </div>
        <div v-if="apiname !== ''" style="margin-top:10px;">
            <Button >绑定数据</Button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: {},
            apiList: [
                {
                    value: 'beijing',
                    label: '添加库存商品'
                },
                {
                    value: 'shanghai',
                    label: '编辑库存商品'
                },
                {
                    value: 'shenzhen',
                    label: '获取库存商品'
                },
                {
                    value: 'hangzhou',
                    label: '删除库存商品'
                },
                {
                    value: 'nanjing',
                    label: '搜索库存商品'
                }
            ],
            apipropsList: [
                {
                    value: 'id',
                    label: '编号'
                },
                {
                    value: 'name',
                    label: '名称'
                },
                {
                    value: 'price',
                    label: '价格'
                },
                {
                    value: 'num',
                    label: '数量'
                }
            ],
            apiname: '',
            apipropsname: ''

        }
    },
    props: {
        values: {
            default: ''
        }
    },
    created() {
        this.items = eval(this.values)
    },
    computed: {

    },
    methods: {
        showapiinfo() {

        }
    }
}
</script>

<style  scoped>

</style>
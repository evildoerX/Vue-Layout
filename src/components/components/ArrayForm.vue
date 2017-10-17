<template>
    <div>
        <h4 style="margin-bottom:5px;">行列设计:</h4>
        <Form :label-width="50">
            <FormItem v-for="(item, index) in items" :key="index" :label="'第' + (index + 1) + '列'" :prop="'items.' + index + '.value'">
                <div v-if="item.type === 'selection'"> 全选：
                    <i-switch v-model="showallselect" size="large" @on-change="change(index)">
                        <span slot="open">开启</span>
                        <span slot="close">关闭</span>
                    </i-switch></div>
                <Row v-if="item.type !== 'selection'">
                    <Col span="8">
                        <!-- <p v-if="item.type !== 'selection'">全选</p> -->
                        <Input type="text" v-model="item.title" placeholder="请输入列标题..."></Input>
                    </Col>
                    <Col span="10" offset="1">
                        <Input type="text" v-model="item.key" placeholder="请输入列键值..."></Input>
                    </Col>
                    <Col span="4" offset="1">
                        <Icon size="20" type="ios-gear" @click.native="showitemmorepanel = true"></Icon>
                        <Icon size="20" color="#ed3f14" type="trash-b" @click.native="handleRemove(index)"></Icon>
                    </Col>
                </Row>
            </FormItem>
            <FormItem>
                <Row>
                    <Col span="12">
                    <Button type="dashed" long @click="handleAdd" icon="plus-round">新增</Button>
                    </Col>
                </Row>
            </FormItem>
            <div>
                <Button type="primary" @click="handleSubmit(items)">提交</Button>
                <Poptip placement="top-start" width="350">
                    <Button type="ghost">更多设置</Button>
                    <div class="api" slot="content">
                        <div class="moresetting_item">
                            <div>
                                全选框：
                            </div>
                            <i-switch v-model="showallselect" size="large" @on-change="allselectAdd(showallselectline)">
                                <span slot="open">开启</span>
                                <span slot="close">关闭</span>
                            </i-switch>
                            <div v-if="showallselect" style="margin-left:10px;">
                                在
                                <Input v-model="showallselectline" style="width:50px"></Input>
                                列
                            </div>
                        </div>
                    </div>
                </Poptip>
            </div>
        </Form>
        <Modal
            v-model="showitemmorepanel"
            title="表头设置"
            @on-ok="ok"
            @on-cancel="cancel">
            <Collapse v-model="showitemmorepanelinfo">
                <Panel name="1">
                    排序
                    <div slot="content" class="moresetting_item">
                            <div>
                                开启排序： 
                            </div>
                            <i-switch v-model="showallselect" size="large">
                                <span slot="open">开启</span>
                                <span slot="close">关闭</span>
                            </i-switch>
                        </div>
                </Panel>
                <Panel name="2">
                    筛选
                    <div slot="content" class="moresetting_item">
                            <div>
                                开启筛选： 
                            </div>
                            <i-switch v-model="showallselect" size="large">
                                <span slot="open">开启</span>
                                <span slot="close">关闭</span>
                            </i-switch>
                        </div>
                </Panel>
            </Collapse>
        </Modal>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: {},
            showallselect: false,
            showallselectline: 1,
            showitemmorepanel: false,
            showitemmorepanelinfo: '1'
        }
    },
    props: {
        values: {
            default: ''
        }
    },
    created() {
        this.items = eval(this.values)
        console.log('ch....', this.items)
        for ( let index in this.items){
            console.log(this.items[index] )
            if (this.items[index].type === 'selection')
            {
                console.log('ch...查看是否是全选')
                this.showallselect = true
            }
        }

    },
    computed: {
        // showallselected() {
        //     for ( index in this.items){
        //         console.log(this.items[index].type )
        //         if (this.items[index].type === 'selection')
        //         {
        //             console.log('ch...查看是否是全选')
        //             this.showallselect = true
        //         }
        //     }
        // }
    },
    methods: {
        ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            },
        change(status) {
            this.$Message.info('开关状态：' + status);
        },
        handleSubmit(name) {
            console.log('ch2....', name)
            this.$emit('clickaddtable', name)
        },
        handleAdd() {
            this.items.push({
                title: '',
                key: ''
            });
        },
        allselectAdd(index) {
            let point = index-1
            console.log(point)
            let str = {
                type: 'selection',
                width: 60,
                align: 'center'
            }
            this.items.splice(point, 0, str);  
            console.log(this.items)
        },
        change(index) {
            if(!this.showallselect){
                this.items.splice(index, 1);
            }
        },
        handleRemove(index) {
            this.items.splice(index, 1);
        }
    }
}
</script>

<style  scoped>
.moresetting_item {
    display: flex;
    align-items: center;
    min-height: 40px;
}
</style>
<template>
    <Form :label-width="80">
        <FormItem
            v-for="(item, index) in items"
            :key="index"
            :label="'第' + (index + 1) + '列'"
            :prop="'items.' + index + '.value'"
            >
            <Row>
                <Col span="8">
                    <Input type="text" v-model="item.title" placeholder="请输入列标题..."></Input>
                </Col>
                <Col span="10" offset="1">
                    <Input type="text" v-model="item.key" placeholder="请输入列键值..."></Input>
                </Col>
                <Col span="4" offset="1">
                    <Button type="ghost" @click="handleRemove(index)">删除</Button>
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
        <FormItem>
            <Button type="primary" @click="handleSubmit(items)">提交</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                items: {}
            }
        },
        props: {
            values: {
                default: ''
            }
        },
        created() {
            this.items = eval(this.values)
            console.log('ch....' , this.items)
        },
        computed: {},
        methods: {
            handleSubmit (name) {
                console.log('ch2....',name)
                this.$emit('clickaddtable',name)
            },
            handleAdd () {
                this.items.push({
                    title: '',
                    key:''
                });
            },
            handleRemove (index) {
                this.items.splice(index, 1);
            }
        }
    }
</script>

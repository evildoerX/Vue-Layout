import { getTemplate, getSlotContent, getStringTypeAttr  } from '@/components/template'

var handle = function(_attr, _slots) {
    //定义默认属性
    let attributes = {
        columns: {
            type: 'Array',
            value: `[
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '名称',
                    key: 'name'
                },
                {
                    title: '',
                    key: 'age'
                },
                {
                    title: '',
                    key: 'address'
                }
            ]`
        },
        data: {
            type: 'Array1',
            value: `[{
                name: '',
                age: '',
                address: ''
            },
            {
                name: '',
                age: '',
                address: ''
            },
            {
                name: '',
                age: '',
                address: ''
            }]`
        // },
        // border: {
        //     type: 'boolean',
        //     value: true
        }
    },
    slots = {
    }

    //覆盖默认属性
    Object.assign(slots, _slots)
    Object.assign(attributes, _attr)

    //根据组件不同需要做的不同操作


    //获取插槽模板内容
    var subContent = getSlotContent(slots)
    //设置当前组件的slot
    if (attributes.slot && attributes.slot!=='default') {
        attributes.slot = {
            type: 'text',
            value: attributes.slot
        }
    } else {
        attributes.slot = {
            type: 'text',
            value: ''
        }
    }

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes)
    let template = `<Table 
                    	${stringAttr}>
                        ${subContent}
                    </Table>`

    return { template, attributes, slots }
}
export default handle
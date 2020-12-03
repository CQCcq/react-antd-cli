import { inject, observer } from 'mobx-react';
/**
 * inject封装
 * 通常情况下inject('storeName'),只能接收一个参数
 * 当有多个store在同一个组件下使用时,使用该工具函数
 * @param {*} stores,store字符串数组
 * @param {*} fc,函数组件
 * 如:injectAll(['store1','store2'],({store1,store2}) => console.log(store1,store2));
 */
export default function injectAll(stores, fc) {
    if (!stores || !stores.length) {
        throw 'Missing params:Array<string>';
    }
    if (!fc) {
        throw 'Missing params:function<component>';
    }
    if (stores.length === 1) {
        return inject(stores[0])(observer(fc));
    }
    let componentInjectObject = null;
    for (let i = 0; i < stores.length; i++) {
        if (i === stores.length - 1) {
            componentInjectObject = componentInjectObject(inject(stores[i])(observer(fc)));
            break;
        }
        if (i === 0) {
            componentInjectObject = inject(stores[0]);
        }
        if (i > 0) {
            componentInjectObject = componentInjectObject(inject(stores[i + 1]));
        }
    }
    return componentInjectObject;
}


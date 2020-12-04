import { observable } from 'mobx';

const userStore = observable({
    data: {},
    initUser() {
        setTimeout(() => {
            const mockData = {
                id: 197,
                name: "张小军",
                phone: "18828055416",
                sex: 1,
                portrait: "https://oss.dhwork.cn/dev/images/portrait/6aa9058d6fca9bf895064af079902cf9.png",
                hasPassword: true,
                roleId: 208,
                projectId: 103,
                roleName: "超级管理员",
                departmentId: 741
            };
            this.data = mockData;
        }, 1000);
    },
    updateUserName(name) {
        this.data.name = name;
    }
});
export default userStore;


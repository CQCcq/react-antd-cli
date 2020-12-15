import React, { Fragment, useEffect } from 'react';
import { Row, Col, Input, Card } from 'antd';
import { UseRootProvider, useRootStore } from './store';

function ShowComponent() {
    const { state } = useRootStore();
    return <Fragment>
        <p>userName: {state.user.name}</p>
        <p>userRole: {state.user.role}</p>
        <p>projectName: {state.project.name}</p>
        <p>projectDesc: {state.project.desc}</p>
    </Fragment>;
}
function UpdateUser() {
    const { state, dispatch } = useRootStore();
    return <Fragment>
        <Row>
            <Col span={11}>
                <p>userName:</p>
                <Input
                    value={state.user.name}
                    onChange={(e) => {
                        dispatch({ type: 'update_user_name', name: e.target.value });
                    }} />
            </Col>
            <Col span={11} offset={2}>
                <p>userRole:</p>
                <Input
                    value={state.user.role}
                    onChange={(e) => {
                        dispatch({ type: 'update_user_role', role: e.target.value });
                    }} />
            </Col>
        </Row><br />
    </Fragment>;
}
function UpdateProject() {
    const { state, dispatch } = useRootStore();
    return <Fragment>
        <Row>
            <Col span={11}>
                <p>projectName:</p>
                <Input
                    value={state.project.name}
                    onChange={(e) => {
                        dispatch({ type: 'update_project_name', name: e.target.value });
                    }}
                />
            </Col>
            <Col span={11} offset={2}>
                <p>projectDesc:</p>
                <Input
                    value={state.project.desc}
                    onChange={(e) => {
                        dispatch({ type: 'update_project_desc', desc: e.target.value });
                    }}
                />
            </Col>
        </Row><br />
    </Fragment>;
}

function Child() {
    return <Fragment>
        <ShowComponent />
        <UpdateUser />
        <UpdateProject />
    </Fragment>;
}
//顶层组件使用Provider包裹
export default function GlobalState() {
    useEffect(() => { }, []);
    return <UseRootProvider>
        <Card title="全局状态管理">
            <Child />
        </Card>
    </UseRootProvider>;
}

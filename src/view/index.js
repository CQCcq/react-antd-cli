import React, { Fragment, Suspense, lazy } from 'react';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Router, Route, Switch } from 'react-router-dom';
import router from '@/common/router';
import { Spin } from 'antd';
//全局顶层模块
const PageNoFind = lazy(() => import('@/view/exception/404'));
const Error = lazy(() => import('@/view/exception/error'));
const Main = lazy(() => import('@/view/main'));
const HomeWapper = lazy(() => import('@/view/home'));
const Login = lazy(() => import('@/view/login'));
const UpdatePassword = lazy(() => import('@/view/updatePassword'));
const Test = lazy(() => import('@/view/test'));
//home
const ArrayToLinkList = lazy(() => import('@/view/home_arrayToLinkList'));
const MobxDemo = lazy(() => import('@/view/home_mobx'));
const UseGlobalHookDemo = lazy(() => import('@/view/home_use-global-hook'));
const ContextAndReducerDemo = lazy(() => import('@/view/home_useContext_useReducer'));
const CustomHook = lazy(() => import('@/view/home_customHook'));
const RecoilDemo = lazy(() => import('@/view/home_recoil'));

export default function View() {
    function LoadingSpin() {
        return <div className="text-center" style={{ height: '480px', lineHeight: '480px' }}>
            <Spin tip="Loading..."></Spin>
        </div>;
    }
    return <Fragment>
        <Router history={router}>
            <Suspense fallback={<LoadingSpin />}>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/home/*">
                        <HomeWapper>
                            <Switch>
                                {/* 首页默认加载成员管理 */}
                                <Route exact path="/home/arrayToLinkList" component={ArrayToLinkList}></Route>
                                <Route path="/home/mobxDemo" component={MobxDemo}></Route>
                                <Route path="/home/useGlobalHookDemo" component={UseGlobalHookDemo}></Route>
                                <Route path="/home/contextAndReducerDemo" component={ContextAndReducerDemo}></Route>
                                <Route path="/home/customHook" component={CustomHook}></Route>
                                <Route path="/home/recoilDemo" component={RecoilDemo}></Route>
                                <Route component={PageNoFind} />
                            </Switch>
                        </HomeWapper>
                    </Route>
                    <Route path="/login" component={Login} />
                    <Route path="/updatePassword" component={UpdatePassword} />
                    <Route path="/test" component={Test} />
                    <Route path="/error" component={Error} />
                    <Route component={PageNoFind} />
                </Switch>
            </Suspense>
        </Router>
    </Fragment >;
}

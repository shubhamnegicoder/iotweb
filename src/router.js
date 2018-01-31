import React from 'react'
import {Router} from 'dva/router'
import App from './routes/app'

export default function ({history, app}) {
    const routes = [
        {
            path: '/',
            component: App,
            getIndexRoute(nextState, cb) {
                require.ensure([], require => {
                    cb(null, {component: require('./routes/dashboard_1')})
                })
            },
            childRoutes: [
                {
                    path: 'dashboard',
                    name: 'dashboard',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/dashboard_1'))
                        })
                    }
                },
                {
                    path: 'users_list',
                    name: 'users_list',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/users_list'))
                        })
                    }
                },
                 {
                    path: 'table/users',
                    name: 'table/users',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/table/users'))
                        })
                    }
                }, {
                    path: 'table/advancedTable',
                    name: 'table/advancedTable',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/table/advancedTable'))
                        })
                    }
                }, {
                    path: 'table/basic',
                    name: 'table/basic',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/table/basic'))
                        })
                    }
                }, {
                    path: 'table/ajaxTable',
                    name: 'table/ajaxTable',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/table/ajaxTable'))
                        })
                    }
                }, {
                    path: 'table/table-playground',
                    name: 'table/table-playground',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/table/table-playground'))
                        })
                    }
                },
                 {
                    path: 'pages/blank',
                    name: 'pages/blank',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/pages/blank'))
                        })
                    }
                },
                 {
                    path: 'pages/login-page',
                    name: 'pages/login-page',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/pages/login-page'))
                        })
                    }
                },
                 {
                    path: 'pages/signup',
                    name: 'pages/signup',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/pages/signup'))
                        })
                    }
                },
                {
                    path: 'region',
                    name: 'region',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/region/add-region'))
                        })
                    }
                },
                {
                    path: 'zone',
                    name: 'zone',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/zone'))
                        })
                    }
                },
                {
                    path: 'users',
                    name: 'users',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/users'))
                        })
                    }
                },
                {
                    path: 'user/userType',
                    name: 'user/userType',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/userType'))
                        })
                    }
                },
                {
                    path: 'branch',
                    name: 'branch',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/branch'))
                        })
                    }
                },
                {
                    path: '*',
                    name: 'error',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('./routes/error'))
                        })
                    }
                }
                
            ]
        }
    ]

    return <Router history={history} routes={routes}/>
}

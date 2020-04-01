import React, { useState, useEffect, useReducer } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { Layout, BackTop, message } from 'antd'
import echarts from 'echarts/lib/echarts'
import routes from '@/routes'
import avatar from '@/assets/images/user.png'
import '@/style/layout.scss'

import AppHeader from './AppHeader.jsx'
import AppAside from './AppAside.jsx'
import AppFooter from './AppFooter.jsx'

const { Content } = Layout

const MENU_TOGGLE = 'menuToggle'

const reducer = (state, action) => {
    switch (action.type) {
        case MENU_TOGGLE:
            return { ...state, menuToggle: !state.menuToggle }
        default:
            return state
    }
}

const getMenu = menu => {
    let newMenu,
        auth = JSON.parse(localStorage.getItem('user')).auth
    if (!auth) {
        return menu
    } else {
        newMenu = menu.filter(res => res.auth && res.auth.indexOf(auth) !== -1)
        return newMenu
    }
}

const DefaultLayout = props => {
    const [menu] = useState(prevState => {
        if (!localStorage.getItem('user')) {
            props.history.push('/login')
            return []
        } else {
            return getMenu(routes)
        }
    })

    const [state, dispatch] = useReducer(reducer, { menuToggle: false })

    let { auth } = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : ''

    const menuClick = () => {
        dispatch({ type: 'menuToggle' })
    }

    const loginOut = () => {
        localStorage.clear()
        props.history.push('/login')
        message.success('登出成功!')
    }

    useEffect(() => {
        let { pathname } = props.location
        let timer

        // 菜单收缩展开时 echarts 图表的自适应
        if (pathname === '/' || pathname === '/index') {
            timer = setTimeout(() => {
                echarts.init(document.getElementById('bar')).resize()
                echarts.init(document.getElementById('line')).resize()
                echarts.init(document.getElementById('pie')).resize()
                echarts.init(document.getElementById('pictorialBar')).resize()
                echarts.init(document.getElementById('scatter')).resize()
            }, 500)
        } else {
            timer = null
        }
        return () => {
            timer && clearTimeout(timer)
        }
    })
    const routers = []
    const getRouters = (menu) => {
        menu.forEach(item => {
            if (item.component) {
                routers.push(item)
            } else {
                getRouters(item.subs)
            }
        })
    }
    getRouters(menu)

    return (
        <Layout className='app'>
            <BackTop />
            <AppAside menuToggle={state.menuToggle} menu={menu} />
            <Layout style={{ minHeight: '100vh' }}>
                <AppHeader menuToggle={state.menuToggle} menuClick={menuClick} avatar={avatar} loginOut={loginOut} />
                <Content className='content'>
                    <Switch>
                        {routers.map(item => {
                            return (
                                <Route
                                    key={item.key}
                                    path={item.key}
                                    render={props => <item.component {...props} />}>
                                </Route>
                            )
                        })}
                        <Redirect to='/404' />
                    </Switch>
                </Content>
                <AppFooter />
            </Layout>
        </Layout>
    )
}

export default withRouter(DefaultLayout)

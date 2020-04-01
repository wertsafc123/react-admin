import React from 'react';
import AsyncLoadable from '@/utils/AsyncLoadable';
import { HomeOutlined, AppstoreOutlined, CompassOutlined, FormOutlined, PieChartOutlined, PaperClipOutlined, BarsOutlined, UserOutlined } from '@ant-design/icons';

const menus = [
    {
        key: '/index',
        title: '首页',
        icon: <HomeOutlined />,
        component: AsyncLoadable(() => import(/* webpackChunkName: 'index' */ '@/views/Index')),
        auth: [1]
    },
    {
        title: '通用',
        key: '/public',
        icon: <AppstoreOutlined />,
        auth: [1],
        subs: [
            { title: '按钮', key: '/public/button', icon: '',
                component: AsyncLoadable(() => import(/* webpackChunkName: 'button' */ '@/views/PublicView/Button')) },
            { title: '图标', key: '/public/icon', icon: '',
                component: AsyncLoadable(() => import(/* webpackChunkName: 'button' */ '@/views/PublicView/Icon')) }
        ]
    },
    {
        title: '导航',
        key: '/nav',
        icon: <CompassOutlined />,
        subs: [
            { title: '下拉菜单', key: '/nav/dropdown', icon: '',
                component: AsyncLoadable(() => import(/* webpackChunkName: 'dropdown' */ '@/views/NavView/Dropdown')) },
            { title: '导航菜单', key: '/nav/menu', icon: '',
                component: AsyncLoadable(() => import(/* webpackChunkName: 'menu' */ '@/views/NavView/Menu')) },
            { title: '步骤条', key: '/nav/step', icon: '',
                component: AsyncLoadable(() => import(/* webpackChunkName: 'step' */ '@/views/NavView/Step')) }
        ]
    },
    {
        title: '表单',
        key: '/form',
        icon: <FormOutlined />,
        subs: [
            { title: '基础表单', key: '/form/base-form', icon: '',
                component: AsyncLoadable(() => import(/* webpackChunkName: 'formBase' */ '@/views/FormView/FormBaseView')) },
            { title: '步骤表单', key: '/form/step-form', icon: '',
                component: AsyncLoadable(() => import(/* webpackChunkName: 'formStep' */ '@/views/FormView/FormStepView')) }
        ]
    },
    {
        title: '展示',
        key: '/show',
        icon: <PieChartOutlined />,
        subs: [
            { title: '表格', key: '/show/table', icon: '',
                component: AsyncLoadable(() => import(/* webpackChunkName: 'table' */ '@/views/ShowView/Table')) },
            { title: '折叠面板', key: '/show/collapse', icon: '',
                component: AsyncLoadable(() => import(/* webpackChunkName: 'collapse' */ '@/views/ShowView/Collapse')) },
            { title: '树形控件', key: '/show/tree', icon: '',
                component: AsyncLoadable(() => import(/* webpackChunkName: 'tree' */ '@/views/ShowView/Tree')) },
            { title: '选项卡', key: '/show/tabs', icon: '',
                component: AsyncLoadable(() => import(/* webpackChunkName: 'tabs' */ '@/views/ShowView/Tabs')) }
        ]
    },
    {
        title: '其它',
        key: '/others',
        icon: <PaperClipOutlined />,
        auth: [1],
        subs: [
            { title: '进度条', key: '/others/progress', icon: '',
                component: AsyncLoadable(() => import(/* webpackChunkName: 'progress' */ '@/views/Others/Progress'))  },
            { title: '动画', key: '/others/animation', icon: '',
                component: AsyncLoadable(() => import(/* webpackChunkName: 'animation' */ '@/views/Others/Animation'))  },
            { title: '上传', key: '/others/upload', icon: '',
                component: AsyncLoadable(() => import(/* webpackChunkName: 'editor' */ '@/views/Others/Editor'))  },
            { title: '富文本', key: '/others/editor', icon: '',
                component: AsyncLoadable(() => import(/* webpackChunkName: 'upload' */ '@/views/Others/Upload'))  }
        ]
    },
    {
        title: '多级导航',
        key: '/one',
        icon: <BarsOutlined />,
        subs: [
            {
                title: '二级',
                key: '/one/two',
                icon: '',
                subs: [{ title: '三级', key: '/one/two/three', icon: '',
                    component: AsyncLoadable(() => import(/* webpackChunkName: 'dropdown' */ '@/views/NavView/Dropdown'))  }]
            }
        ]
    },
    {
        title: '关于',
        key: '/about',
        icon: <UserOutlined />,
        component: AsyncLoadable(() => import(/* webpackChunkName: 'about' */ '@/views/About')),
        auth: [1]
    }
]

export default menus;

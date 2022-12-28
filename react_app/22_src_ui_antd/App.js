import React, {Component} from 'react';
import {Button, Layout, Menu} from "antd";
import {MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,} from '@ant-design/icons'
import {NavLink, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Photo from "./pages/Photo/Photo";
import Upload from "./pages/Upload/Upload";
const { Header, Sider, Content } = Layout;
class App extends Component {

    state = {
        collapsed: false,
        itemSelectedKey: 'profile'
    }

    menuItemClicked = ({ key }) =>{
        console.log(key)
        this.setState({itemSelectedKey: key})
    }

    componentDidMount() {
        const path = this.props.location.pathname.split('/')[1]
        this.setState({itemSelectedKey: path})
    }

    render() {
        const colorBgContainer = '#fbfbfb'

        return (
            <Layout style={{height:'100vh'}}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu
                        onClick={this.menuItemClicked}
                        theme="dark"
                        mode="inline"
                        selectedKeys={[this.state.itemSelectedKey]}
                        items={[
                            {
                                key: 'profile',
                                icon: <NavLink to={'/profile'}><UserOutlined /></NavLink>,
                                label: 'Profile',
                            },
                            {
                                key: 'photo',
                                icon: <NavLink to={'/photo'}><VideoCameraOutlined /></NavLink>,
                                label: 'Photo',
                            },
                            {
                                key: 'upload',
                                icon: <NavLink to={'/upload'}><UploadOutlined /></NavLink>,
                                label: 'Upload',
                            },
                        ]}

                    />
                </Sider>
                <Layout className="site-layout">
                    <Header style={{ padding: 0, background: colorBgContainer }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => this.setState({collapsed: !this.state.collapsed}),
                            style: {margin: '20px'}
                        })}
                        {/*<Button type={"primary"} style={{marginRight:'0px'}}>Log Out</Button>*/}
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        <Switch>
                            <Route path='/profile' component={Profile}/>
                            <Route path='/photo' component={Photo}/>
                            <Route path='/upload' component={Upload}/>
                            <Redirect to='/profile'></Redirect>


                        </Switch>
                    </Content>
                </Layout>
            </Layout>

        )
    }
}

export default withRouter(App);
// import React, { useState } from 'react';
// import {
//     MenuFoldOutlined,
//     MenuUnfoldOutlined,
//     UploadOutlined,
//     UserOutlined,
//     VideoCameraOutlined,
// } from '@ant-design/icons';
// import { Layout, Menu, theme } from 'antd';
// const { Header, Sider, Content } = Layout;
// const App = () => {
//     const [collapsed, setCollapsed] = useState(false);
//     const {
//         token: { colorBgContainer },
//     } = theme.useToken();
//     return (
//         <Layout>
//             <Sider trigger={null} collapsible collapsed={collapsed}>
//                 <div className="logo" />
//                 <Menu
//                     theme="dark"
//                     mode="inline"
//                     defaultSelectedKeys={['1']}
//                     items={[
//                         {
//                             key: '1',
//                             icon: <UserOutlined />,
//                             label: 'nav 1',
//                         },
//                         {
//                             key: '2',
//                             icon: <VideoCameraOutlined />,
//                             label: 'nav 2',
//                         },
//                         {
//                             key: '3',
//                             icon: <UploadOutlined />,
//                             label: 'nav 3',
//                         },
//                     ]}
//                 />
//             </Sider>
//             <Layout className="site-layout">
//                 <Header
//                     style={{
//                         padding: 0,
//                         background: colorBgContainer,
//                     }}
//                 >
//                     {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//                         className: 'trigger',
//                         onClick: () => setCollapsed(!collapsed),
//                     })}
//                 </Header>
//                 <Content
//                     style={{
//                         margin: '24px 16px',
//                         padding: 24,
//                         minHeight: 280,
//                         background: colorBgContainer,
//                     }}
//                 >
//                     Hello World!
//                 </Content>
//             </Layout>
//         </Layout>
//     );
// };
// export default App;
import React from 'react';
import {Col, Icon, Layout, Menu, Row} from 'antd';
import {menuJsonData} from "../json_data/MenuJsonData";
import {userLoginJson} from "../json_data/UserLoginJson";
import {Route, Switch, withRouter} from 'react-router-dom'
import {LifePakLayoutComponent} from "./LifePakLayoutComponent";

const {Header, Sider, Content} = Layout;
const {SubMenu} = Menu;


class MainLayoutComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            menuBarCollapsed: false,
            selectedMenuItem: "menu1",

        }
    }

    parentUpdateState(item) {
        console.log(item)
        this.setState(item)
    }

    toggle = () => {
        this.setState({
            menuBarCollapsed: !this.state.menuBarCollapsed,
        });
    };

    menuClicked = (item, url) => {
        this.setState({
            selectedMenuItem: item.key
        })
        this.props.history.push((url.replace(/\s/g, '')))
    }


    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.menuBarCollapsed}>
                    <div className="logo">PLACE LOGO HERE</div>
                    <Menu
                        defaultSelectedKeys={['menu1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        // inlineCollapsed={this.state.menuBarCollapsed}
                    >
                        {menuJsonData ?
                            (menuJsonData.map((menu, i) => {
                                    return (
                                        menu.subMenu ?

                                            <SubMenu
                                                key={"subMenu" + i}
                                                title={
                                                    <p><Icon type="appstore"/><span>{menu.name}</span></p>
                                                }
                                                style={{textAlign: "left"}}
                                            >
                                                {menu.subMenu ?
                                                    (menu.subMenu.map((subMenu, j) => {
                                                        return (
                                                            <Menu.Item
                                                                key={"subMenuItem" + i + j}
                                                                onClick={(e => this.menuClicked(e, subMenu.name))}>{subMenu.name}</Menu.Item>
                                                        )
                                                    }))
                                                    : null
                                                }

                                            </SubMenu>
                                            : <Menu.Item
                                                key={"menu" + i}
                                                style={{textAlign: "left"}}
                                                onClick={(e) => this.menuClicked(e, "/" + menu.name)}
                                            >
                                                <Icon type="appstore"/><span>{menu.name}</span>
                                            </Menu.Item>
                                    )
                                })
                            ) : null
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0, minHeight: "7vh"}}>
                        <Row>
                            <Col span={1}>
                                <Icon
                                    className="trigger"
                                    type={this.state.menuBarCollapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                            </Col>
                            <Col span={18}></Col>
                            <Col span={5}>
                                <Row>
                                    <Icon style={{marginLeft: "15px"}} type="search"/>
                                    <Icon style={{marginLeft: "15px"}} type="question-circle"/>
                                    <Icon style={{marginLeft: "15px"}} type="notification"/>
                                    <Menu style={{minHeight: "7.1vh", paddingTop: "1vh", float: "right"}}
                                          onClick={this.handleClick}
                                          selectedKeys={[this.state.current]} mode="horizontal">
                                        <SubMenu
                                            title={<span className="submenu-title-wrapper"><Icon
                                                type="user"/>{userLoginJson.name}</span>}
                                        >
                                            <Menu.Item>Profile</Menu.Item>
                                            <Menu.Item>Settings</Menu.Item>

                                        </SubMenu>
                                        <SubMenu
                                            title={<Icon type="global"/>}
                                        >
                                            <Menu.Item>English</Menu.Item>
                                            <Menu.Item>Chinese</Menu.Item>

                                        </SubMenu>
                                    </Menu>
                                </Row>
                            </Col>
                        </Row>


                    </Header>


                    <Content
                        style={{
                            margin: '0px 12px 0px 12px',
                            background: '#fff',
                            minHeight: "85vh",
                        }}
                    >

                        <Switch>
                            <Route exact path="/">Landing Page</Route>
                            <Route path="/Dashboards">Dashboard</Route>
                            <Route path="/LifePak"><LifePakLayoutComponent props={this.state}
                            />
                            </Route>
                        </Switch>


                    </Content>

                </Layout>
            </Layout>
        );
    }
}

export default withRouter(MainLayoutComponent)
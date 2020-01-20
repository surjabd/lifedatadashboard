import React from 'react';
import {Button, Card, Dropdown, Icon, Input, List, Menu, Select} from "antd";

const data = [
    {
        title: 'First Draft',
        status: "Unpublished",
        author: "Hasan Sharif",
        permission: {
            lifePackAccess: true,
            lifePackPublish: true,
            lifePackDuplicate: true,
            lifePackEdit: true,
            lifePackDelete: true
        },
        sessionInfo: [{
            title: "Startup Session 1",
            permission: true,
            type: "SUS",
            blockInfo: [{
                title: "Startup Session 1 Block 1",
                promptInfo: [{
                    title: "1 prompt",
                    permission: {},
                    branchInfo: [
                        {
                            title: "Branch1",
                            permission: {}
                        },
                        {
                            title: "Branch2"
                        }
                    ]

                },
                    {
                        title: "2 prompt",
                        permission: {},
                        branchInfo: [
                            {
                                title: "Branch1",
                                permission: {}
                            },
                            {
                                title: "Branch2"
                            }
                        ]

                    }]
            }]
        },
            {
                title: "Notification Generated Sessions 1",
                permission: true,
                type: "NIS",
                blockInfo: [{
                    title: "NIS Session 1 Block 1",
                    promptInfo: [{
                        title: "1 prompt",
                        permission: {},
                        branchInfo: [
                            {
                                title: "Branch1",
                                permission: {}
                            },
                            {
                                title: "Branch2",
                                permission: {}
                            }
                        ]

                    }]
                }]
            }, {
                title: "Notification Generated Sessions 2",
                permission: true,
                type: "NIS",
                blockInfo: [{
                    title: "NIS Session 1 Block 2",
                    promptInfo: [{
                        title: "1 prompt",
                        permission: {},
                        branchInfo: [
                            {
                                title: "Branch1",
                                permission: {}
                            },
                            {
                                title: "Branch2",
                                permission: {}
                            }
                        ]

                    }]
                }]
            }, {
                title: "User Generated Sessions 1",
                permission: true,
                type: "UIS",
                blockInfo: [{
                    title: "UIS 1",
                    promptInfo: [{
                        title: "1 prompt",
                        permission: {},
                        branchInfo: [
                            {
                                title: "Branch1",
                                permission: {}
                            },
                            {
                                title: "Branch2"
                            }
                        ]

                    }, {
                        title: "2 prompt"

                    }]
                }]
            }]
    },

    {
        title: 'Second Draft',
        status: "Unpublished",
        author: "Hasan Sharif",
        permission: {
            lifePackAccess: true,
            lifePackPublish: true,
            lifePackDuplicate: true,
            lifePackEdit: true,
            lifePackDelete: true
        },
        sessionInfo: [{
            title: "Startup Session 2",
            permission: true,
            type: "SUS",
            blockInfo: [{
                title: "Startup Session 1 Block 1",
                promptInfo: [{
                    title: "1 prompt 1",
                    permission: {},
                    branchInfo: [
                        {
                            title: "Branch111",
                            permission: {}
                        },
                        {
                            title: "Branch112"
                        }
                    ]

                },
                    {
                        title: "2 prompt",
                        permission: {},
                        branchInfo: [
                            {
                                title: "Branch121",
                                permission: {}
                            },
                            {
                                title: "Branch122"
                            }
                        ]

                    }]
            },{
                title: "Startup Session 1 Block 2",
                promptInfo: [{
                    title: "2 prompt 1",
                    permission: {},
                    branchInfo: [
                        {
                            title: "Branch1",
                            permission: {}
                        },
                        {
                            title: "Branch2"
                        }
                    ]

                },
                    {
                        title: "2 prompt",
                        permission: {},
                        branchInfo: [
                            {
                                title: "Branch1",
                                permission: {}
                            },
                            {
                                title: "Branch2"
                            }
                        ]

                    }]
            }
            ]
        },
            {
                title: "Notification Generated Sessions 1",
                permission: true,
                type: "NIS",
                blockInfo: [{
                    title: "NIS Session 1 Block 1",
                    promptInfo: [{
                        title: "1 prompt",
                        permission: {},
                        branchInfo: [
                            {
                                title: "Branch1",
                                permission: {}
                            },
                            {
                                title: "Branch2",
                                permission: {}
                            }
                        ]

                    }]
                }]
            }, {
                title: "Notification Generated Sessions 2",
                permission: true,
                type: "NIS",
                blockInfo: [{
                    title: "NIS Session 1 Block 2",
                    promptInfo: [{
                        title: "1 prompt",
                        permission: {},
                        branchInfo: [
                            {
                                title: "Branch1",
                                permission: {}
                            },
                            {
                                title: "Branch2",
                                permission: {}
                            }
                        ]

                    }]
                }]
            }, {
                title: "User Generated Sessions 1",
                permission: true,
                type: "UIS",
                blockInfo: [{
                    title: "UIS 1",
                    promptInfo: [{
                        title: "1 prompt",
                        permission: {},
                        branchInfo: [
                            {
                                title: "Branch1",
                                permission: {}
                            },
                            {
                                title: "Branch2"
                            }
                        ]

                    }, {
                        title: "2 prompt"

                    }]
                }]
            }]
    }

];

const {Search} = Input;
const {Option} = Select;


export class LifePakCardComponent extends React.Component {

    state = {
        "data": data

    }

    searchTitle(value) {
        if (value === "") {
            this.setState({
                "data": data
            })
        } else {
            var filtered_data = data.filter(item => item["title"].toLowerCase().includes(value.toLowerCase()))
            this.setState({
                "data": filtered_data
            })
        }
    }

    sortLifePak(value) {
        if (value === "Name") {
            var temp = this.state.data.sort((a, b) => a.title.localeCompare(b.title));

        } else {
            var temp = this.state.data.sort((a, b) => a.status.localeCompare(b.status))
        }
        this.setState({
            "data": temp
        })
    }


    generateMenu(permission) {
        return (

            <Menu>
                {permission.lifePackAccess === true ? <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        LifePak Access
                    </a>
                </Menu.Item> : null}

                {permission.lifePackPublish === true ? <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        Publish LifePak
                    </a>
                </Menu.Item> : null}
                {permission.lifePackDuplicate === true ? <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        Duplicate LifePak
                    </a>
                </Menu.Item> : null}
                {permission.lifePackEdit === true ? <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        Edit LifePak
                    </a>
                </Menu.Item> : null}
                {permission.lifePackDelete === true ? <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        Delete LifePak
                    </a>
                </Menu.Item> : null}
            </Menu>
        )
    }

    render() {
        return (

            <Card style={{height: "80vh", textAlign: "left", flex: "1 1 auto", overflowY: "auto"}}>

                <div
                    style={{
                        height: "44px",
                        // borderStyle: "solid",
                        display: "flex",
                        // justifyContent: "flex-end",
                        alignItems: "center",
                        paddingLeft: "20px",

                    }}
                >

                    <span style={{fontSize: "22px", marginRight: "200px"}}>LifePak</span>
                    <Search
                        placeholder="Search LifePak"
                        onSearch={value => this.searchTitle(value)}
                        style={{width: 200, marginLeft: "40px", margin: "10px"}}
                    />
                    <Select defaultValue="Select Sort" style={{width: 150}}
                            onChange={value => this.sortLifePak(value)}>
                        <Option value="Name">Sort by Name</Option>
                        <Option value="Status">Sort by Status</Option>
                    </Select>
                    <Button style={{float: "right", margin: "10px"}}>+ Create</Button>

                </div>
                <List
                    style={{marginTop: "10px"}}
                    itemLayout="horizontal"
                    dataSource={this.state.data}
                    bordered={true}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<a onClick={() => this.props.parentUpdateState({
                                    pakChosen: true,
                                    sessionChosen:false,
                                    blockChosen:false,
                                    promptChosen:false,
                                    pakInfo: item
                                })}>{item.title}</a>}
                                description={item.status + " | " + item.author}

                            />
                            <Dropdown overlay={this.generateMenu(item.permission)}>
                                <a className="ant-dropdown-link" href="#">
                                    <Icon type="menu"/>
                                </a>
                            </Dropdown>
                        </List.Item>
                    )}
                />

            </Card>


        );
    }
}

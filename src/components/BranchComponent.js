import React from 'react';
import {Card, Collapse, Icon, Input, List, Select} from "antd";

const {Option} = Select;

const {Search} = Input;

const {Panel} = Collapse;

export class BranchComponent extends React.Component {


    render() {
        return (
            <Card style={{height: "80vh", textAlign: "left", flex: "1 1 auto", overflowY: "auto"}}>
                <div
                    style={{
                        height: "44px",
                        // borderStyle: "solid",
                        textAlign: "center",
                    }}
                >

                    <span style={{fontSize: "22px"}}>Branch for {this.props.props.promptInfo.title}</span>

                </div>
                <div style={{marginTop: "10px"}}>
                    {this.props.props.promptChosen ? this.props.props.promptInfo.branchInfo.length > 0 ?

                    <List
                                    style={{marginTop: "10px"}}
                                    itemLayout="horizontal"
                                    dataSource={ this.props.props.promptInfo.branchInfo}
                                    bordered={true}
                                    renderItem={(item, i) => (
                                        <List.Item key={i}>
                                            <List.Item.Meta
                                                title={item.title}
                                                // description={item.status + " | " + item.author}

                                            />
                                            <Icon style={{fontSize: '22px'}} type="plus"/>
                                        </List.Item>

                                    )}
                                /> : null : null}
                </div>

            </Card>


        );
    }
}

{/*<Collapse*/
}
{/*    key={i}*/
}
{/*    defaultActiveKey={['0']}*/
}
{/*    expandIconPosition={"right"}*/
}
{/*    accordion={true}*/
}
{/*    expandIcon={({ isActive }) => <Icon type="plus" rotate={isActive ? 90 : 0} />}*/
}
{/*>*/
}
{/*    <Panel key={i} header={block.title}/>*/
}

{/*</Collapse>*/
}
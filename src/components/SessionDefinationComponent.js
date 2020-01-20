import React from 'react';
import {Card, Collapse, Icon, List} from "antd";


const {Panel} = Collapse;


export class SessionDefinitionComponent extends React.Component {

    // state={
    //     sessionInfo:this.props.props.pakInfo.sessionInfo
    // }
    chooseSession(item, i) {
        this.props.Carousel.goToSlide(i)
        // this.setState(item)
        this.props.parentUpdateState({
            sessionChosen: true,
            blockChosen: false,
            promptChosen: false,
            sessionInfo: item
        })
    }

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

                    <span style={{fontSize: "22px"}}>Session Definitions</span>
                    <div style={{marginTop: "20px"}}>


                        <Collapse
                            defaultActiveKey={['0']}
                            expandIconPosition={"right"}

                        >
                            <Panel key={1} header="Startup Session" extra={<Icon type="plus"/>}>

                                <List
                                    style={{marginTop: "10px"}}
                                    itemLayout="horizontal"
                                    dataSource={this.props.props.pakChosen === true ? this.props.props.pakInfo.sessionInfo.filter(session => session["type"] === "SUS") : null}
                                    bordered={true}
                                    renderItem={(item, i) => (
                                        <List.Item key={i} onClick={() => this.chooseSession(item, 1)}>
                                            <List.Item.Meta
                                                title={item.title}
                                                // description={item.status + " | " + item.author}

                                            />
                                            <Icon type="delete"/>
                                            <Icon style={{fontSize: '22px'}} type="step-forward"/>
                                        </List.Item>

                                    )}
                                />
                            </Panel>
                            <Panel key={2} header="Notification Initiated Session (NIS)" extra={<Icon type="plus"/>}>
                                <List
                                    style={{marginTop: "10px"}}
                                    itemLayout="horizontal"
                                    dataSource={this.props.props.pakChosen === true ? this.props.props.pakInfo.sessionInfo.filter(session => session["type"] === "NIS") : null}
                                    bordered={true}
                                    renderItem={(item, i) => (
                                        <List.Item key={i} onClick={() => this.chooseSession(item, 1)}>
                                            <List.Item.Meta
                                                title={item.title}
                                                // description={item.status + " | " + item.author}

                                            />
                                            <Icon type="delete"/>
                                            <Icon style={{fontSize: '22px'}} type="step-forward"/>
                                        </List.Item>

                                    )}
                                />
                            </Panel>
                            <Panel key={3} header="User Initiated Session (UIS)" extra={<Icon type="plus"/>}>
                                <List
                                    style={{marginTop: "10px"}}
                                    itemLayout="horizontal"
                                    dataSource={this.props.props.pakChosen === true ? this.props.props.pakInfo.sessionInfo.filter(session => session["type"] === "UIS") : null}
                                    bordered={true}
                                    renderItem={(item, i) => (
                                        <List.Item key={i} onClick={() => this.chooseSession(item, 1)}>
                                            <List.Item.Meta
                                                title={item.title}
                                                // description={item.status + " | " + item.author}

                                            />
                                            <Icon type="delete"/>
                                            <Icon style={{fontSize: '22px'}} type="step-forward"/>
                                        </List.Item>

                                    )}
                                />
                            </Panel>


                        </Collapse>
                    </div>
                </div>
            </Card>


        );
    }
}

// {this.props.props.pakChosen === true ? this.props.props.pakInfo.sessionInfo.map((session, i) =>
//                                 <Panel key={i} header={session.title} extra={<Icon
//                                     type="plus"
//                                 />}>
//                                     {console.log(session)}
//                                     {session.blockInfo.length > 0 ?
//                                         <List
//                                             style={{marginTop: "10px"}}
//                                             itemLayout="horizontal"
//                                             dataSource={session.blockInfo}
//                                             bordered={true}
//                                             renderItem={(item) => (
//                                                 <List.Item  onClick={()=>this.chooseSession(session,1)}>
//                                                     <List.Item.Meta
//                                                         title={item.title}
//                                                         // description={item.status + " | " + item.author}
//
//                                                     />
//                                                     <Icon type="delete"/>
//                                                     <Icon style={{fontSize: '22px'}} type="step-forward"/>
//                                                 </List.Item>
//
//                                             )}
//                                         />
//                                         : null}
//
//                                 </Panel>
//                             ) : null}
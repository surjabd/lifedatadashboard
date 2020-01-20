import React from 'react';
import {Card, Collapse, Icon, Input, List, Select,Button} from "antd";
import Carousel from "react-multi-carousel";

const {Option} = Select;

const {Search} = Input;
const {Panel} = Collapse;


export class SessionDefinitionComponent extends React.Component {

    chooseSession(item,i){
        this.props.Carousel.goToSlide(i)
        this.props.parentUpdateState({
            sessionChosen:true,
            sessionInfo:item
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
                            {this.props.props.pakChosen === true ? this.props.props.pakInfo.sessionInfo.map((session, i) =>
                                <Panel key={i} header={session.title} extra={<Icon
                                    type="plus"
                                />}>
                                    {console.log(session)}
                                    {session.blockInfo.length > 0 ?
                                        <List
                                            style={{marginTop: "10px"}}
                                            itemLayout="horizontal"
                                            dataSource={session.blockInfo}
                                            bordered={true}
                                            renderItem={(item) => (
                                                <List.Item  onClick={()=>this.chooseSession(session,1)}>
                                                    <List.Item.Meta
                                                        title={item.title}
                                                        // description={item.status + " | " + item.author}

                                                    />
                                                    <Icon type="delete"/>
                                                    <Icon style={{fontSize: '22px'}} type="step-forward"/>
                                                </List.Item>

                                            )}
                                        />
                                        : null}

                                </Panel>
                            ) : null}

                        </Collapse>
                    </div>
                </div>
            </Card>


        );
    }
}
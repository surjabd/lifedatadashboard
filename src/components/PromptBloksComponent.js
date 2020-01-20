import React from 'react';
import {Button, Card, Collapse, Icon, Input, List, Select} from "antd";

const {Option} = Select;

const {Search} = Input;

const {Panel} = Collapse;

export class PromptBloksComponent extends React.Component {

    chooseBlock(item, i) {
        this.props.Carousel.goToSlide(i)
        // this.setState(item)
        this.props.parentUpdateState({
            blockChosen: true,
            blockInfo: item
        })
    }

     choosePrompt(item, i) {
        this.props.Carousel.goToSlide(i)
        // this.setState(item)
        this.props.parentUpdateState({
            promptChosen: true,
            promptInfo: item
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

                    <span style={{fontSize: "22px"}}>Prompt Bloks</span>

                </div>
                <div style={{marginTop: "10px"}}>
                    {this.props.props.sessionInfo ? this.props.props.sessionInfo.blockInfo.length > 0 ? this.props.props.sessionInfo.blockInfo.map((block, i) =>
                        <Collapse
                            key={i}
                            defaultActiveKey={['0']}
                            expandIconPosition={"right"}
                            onChange={() => this.chooseBlock(block, 2)}

                        >
                            <Panel key={1} header={block.title}>

                                {this.props.props.blockChosen == true ?
                                    <div>
                                       <Button style={{marginTop: 10, width: '100%', height: 50}}>Create New Prompt</Button>
                                    <List
                                        style={{marginTop: "10px"}}
                                        itemLayout="horizontal"
                                        dataSource={this.props.props.blockInfo.promptInfo.length > 0 ? this.props.props.blockInfo.promptInfo : null}
                                        bordered={true}
                                        renderItem={(item, i) => (
                                            <List.Item key={i}>
                                                <List.Item.Meta
                                                    title={item.title}


                                                />
                                                <Icon style={{fontSize: 26,padding:3}} type="mobile"/>
                                                <Icon style={{fontSize: 26,padding:3}} type="copy"/>
                                                <Icon style={{fontSize: 26,padding:3}} type="edit"/>
                                                <Icon style={{fontSize: 26,padding:3}} type="delete"/>
                                                <Icon style={{fontSize: 26,padding:3}} type="branches"
                                                    onClick={()=>this.choosePrompt(item,2)}
                                                />
                                            </List.Item>

                                        )}
                                    />
                                    </div>
                                    : null}


                            </Panel>

                        </Collapse>
                    ) : null : null}
                </div>

            </Card>


        );
    }
}

import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {LifePakCardComponent} from "./LifePakCardComponent";
import {SessionDefinitionComponent} from "./SessionDefinationComponent";
import {PromptBloksComponent} from "./PromptBloksComponent";
import {BranchComponent} from "./BranchComponent";
import {Breadcrumb, Card} from "antd";

export function updateParentState(item) {
    console.log(item)
    this.setState(item)
}

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
    }
}

export class LifePakLayoutComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pakChosen: "",
            sessionChosen: "",
            pakInfo: "",
            sessionInfo: "",
            blockChosen: "",
            blockInfo: "",
            promptChosen: "",
            promptInfo: ""
        }


    }

    setPakLayoutState(item) {
        // console.log(item)
        this.setState(item)
        console.log(item)

    }


    // updateParentState = updateParentState.bind(this)

    render() {
        return (
            <Card style={{background: "grey"}}>
                <Breadcrumb style={{
                    margin: '12px 0px 12px 0px',
                    padding: 12,
                    background: '#fff',
                    textAlign: "left"

                    ,
                }}>
                    <Breadcrumb.Item>
                        <a onClick={() => this.setState({
                            pakChosen: false,
                            sessionChosen: false,
                            blockChosen:false,
                            promptChosen: false,

                        }, () => this.Carousel.goToSlide(0))}>LifePak Home</a>
                    </Breadcrumb.Item>
                    {this.state.pakChosen === true ?
                        <Breadcrumb.Item>
                            <a onClick={() => this.setState({
                                // sessionChosen: false,
                                // blockChosen:false,
                                // promptChosen: false
                            }, () => (this.Carousel.goToSlide(0)))}>{this.state.pakInfo.title}</a>
                        </Breadcrumb.Item> : null}

                    {this.state.pakChosen === true && this.state.sessionChosen === true ?
                        <Breadcrumb.Item>
                          <a onClick={() => this.setState({
                                // promptChosen: false
                            }, () => this.Carousel.goToSlide(1))}>{this.state.sessionInfo.title}</a>
                        </Breadcrumb.Item> : null}

                    {this.state.pakChosen === true && this.state.sessionChosen === true && this.state.blockChosen === true ?
                        <Breadcrumb.Item>
                           <a onClick={() => this.setState({
                                // promptChosen: false
                            }, () => this.Carousel.goToSlide(2))}>{this.state.blockInfo.title}</a>
                        </Breadcrumb.Item> : null}


                    {this.state.pakChosen === true && this.state.sessionChosen === true && this.state.blockChosen === true  && this.state.promptChosen ===true?
                        <Breadcrumb.Item>
                           <a onClick={() => this.setState({
                                // promptChosen: false
                            }, () => this.Carousel.goToSlide(3))}>{this.state.promptInfo.title}</a>
                        </Breadcrumb.Item> : null}
                </Breadcrumb>
                <Carousel style={{height: "83vh", textAlign: "left", flex: "1 1 auto", background: "grey"}}
                          responsive={responsive}
                          swipeable={false}
                          draggable={false}
                          showDots={true}
                          removeArrowOnDeviceType={["desktop"]}
                          renderButtonGroupOutside={true}
                          ref={(el) => (this.Carousel = el)}
                >

                    <div>
                        <LifePakCardComponent parentUpdateState={(item) => this.setPakLayoutState(item)}/>
                    </div>
                    <div>   {this.state.pakChosen === true ?
                        <SessionDefinitionComponent props={this.state} Carousel={this.Carousel}
                                                    parentUpdateState={(item) => this.setPakLayoutState(item)}/> : null}</div>
                    <div>{this.state.pakChosen === true && this.state.sessionChosen === true ?
                        <PromptBloksComponent props={this.state} Carousel={this.Carousel}
                                              parentUpdateState={(item) => this.setPakLayoutState(item)}/> : null}</div>
                    <div>{this.state.pakChosen === true && this.state.sessionChosen === true && this.state.blockChosen === true && this.state.promptChosen === true ?
                        <BranchComponent props={this.state} Carousel={this.Carousel}
                                              parentUpdateState={(item) => this.setPakLayoutState(item)}/> : null}</div>

                </Carousel>
            </Card>


        );
    }
}

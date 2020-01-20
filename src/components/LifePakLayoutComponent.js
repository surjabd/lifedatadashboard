import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {LifePakCardComponent} from "./LifePakCardComponent";
import {SessionDefinitionComponent} from "./SessionDefinationComponent";
import {PromptBloksComponent} from "./PromptBloksComponent";
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
            promptChosen: "",
            pakInfo: "",
            sessionInfo:"",
            pakName: "",
            branchChosen: false
        }
        updateParentState = updateParentState.bind(this)

    }

    choosePak(item) {
        // console.log(item)
        this.setState(item, () => console.log(this.state))

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
                        <a onClick={() => this.setState({pakChosen: false, sessionChosen:false,promptChosen:false},()=>this.Carousel.goToSlide(0))}>LifePak Home</a>
                    </Breadcrumb.Item>
                    {this.state.pakChosen === true ?
                        <Breadcrumb.Item>
                            <a onClick={() => this.setState({sessionChosen:false,promptChosen:false},()=>this.Carousel.goToSlide(1))}>{this.state.pakName}</a>
                        </Breadcrumb.Item> : null}

                    {this.state.pakChosen === true && this.state.sessionChosen === true ?
                        <Breadcrumb.Item>
                            <a href="">Application Center</a>
                        </Breadcrumb.Item> : null}

                    {this.state.pakChosen === true && this.state.sessionChosen === true && this.state.promptChosen === true ?
                        <Breadcrumb.Item>
                            <a href="">Application Center</a>
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
                        <LifePakCardComponent parentUpdateState={(item) => this.choosePak(item)}/>
                    </div>
                    <div>   {this.state.pakChosen === true ?
                        <SessionDefinitionComponent props={this.state} Carousel={this.Carousel}
                                                    parentUpdateState={(item) => this.choosePak(item)}/> : null}</div>
                    <div>{this.state.pakChosen === true && this.state.sessionChosen === true ?
                        <PromptBloksComponent/> : null}</div>
                    <div>4</div>
                </Carousel>
            </Card>


        );
    }
}

{/*<Row>*/
}
{/*                 <Col span={12}>*/
}
{/*                     <LifePakCardComponent parentUpdateState={(item) => this.choosePak(item)}/>*/
}
{/*                 </Col>*/
}
{/*                 <Col span={12}>*/
}
{/*                     {this.state.pakChosen === true ? <SessionDefinitionComponent pakInfo={this.state.pakInfo}/> : null}*/
}

{/*                 </Col>*/
}
{/*             </Row>*/
}
{/*             {this.state.pakChosen === true ?*/
}
{/*                 <div>*/
}
{/*                     <Row>*/
}
{/*                         <Col span={12}>*/
}
{/*                             <SessionDefinitionComponent  pakInfo={this.state.pakInfo}/>*/
}
{/*                         </Col>*/
}
{/*                         <Col span={12}>*/
}
{/*                             <PromptBloksComponent/>*/
}
{/*                         </Col>*/
}
{/*                     </Row>*/
}
{/*                 </div>*/
}
{/*                 : null}*/
}
{/*             {this.state.pakChosen === true ?*/
}
{/*                 <div>*/
}
{/*                     <h3>3</h3>*/
}
{/*                 </div>*/
}
{/*                 : null}*/
}
{/*             <div>*/
}
{/*                 <h3>4</h3>*/
}
{/*             </div>*/
}
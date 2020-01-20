import React from 'react';
import {Card, Input, Select} from "antd";

const {Option} = Select;

const {Search} = Input;

export class PromptBloksComponent extends React.Component {


    render() {
        return (
            <Card style={{height: "80vh", textAlign: "left", flex: "1 1 auto", overflowY: "auto"}}>
                <div
                    style={{
                        height: "44px",
                        borderStyle: "solid",
                        textAlign: "center",
                    }}
                >

                    <span style={{fontSize: "22px"}}>Prompt Bloks</span>

                </div>
            </Card>


        );
    }
}

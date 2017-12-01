import React from "react";
import {Row, Col, Input} from "react-materialize";
import {InputForm} from "../AddPlayers/InputForm";



        export const RegisterForm = props => (

            class register extends React.Component {
                constructor(props) {
                    super(props);
                    this.state = { name: '', email: '', password: '', passwordConfirm: '' };
                }

                handleChange(event) {
                    this.setState({ [event.target.name]: event.target.value });
                }

                handleregister= event => {
                    const {name, value} = event.target;
                    this.setState({
                        [name]: value
                    });


                    <div>
                <Row>
                    <InputForm
                        label="email"
                        type="email"
                        s={12}
                        validate
                        data-error="Please enter a valid email address"
                        data-success="Valid Email"
                        value={this.state.email}
                        onChange={this.handleChange.bind(this)}
                    />
                </Row>
                <Row>
                    <InputForm
                        label="password"
                        type="password"
                        s={12}
                        validate
                        data-error="Please enter a valid email address"
                        data-success="Valid Email"
                        value={this.state.password}
                        onChange={this.handleChange.bind(this)}
                    />
                </Row>
            </div>

                }}

        )

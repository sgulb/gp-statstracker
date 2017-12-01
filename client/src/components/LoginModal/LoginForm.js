import React from "react";
import {Row, Col, Input} from "react-materialize";

// value={this.user.email}
// onChange={this.handleInputChange}



export const LoginForm = props => (
		<div>
            <Row>
                <Input
                    label="Email"
                    type="email"
                    data-error="Please enter a valid email address"
                    data-success="Valid Email"
                    s={12}
                    validate
                    name="email"
                    className="validate"

                />

            </Row>
            <Row>
                <Input
                    label="Password"
                    type="password"
                    s={12}
                    validate
                    name="password" className="validate"
                />
            </Row>
        </div>
)

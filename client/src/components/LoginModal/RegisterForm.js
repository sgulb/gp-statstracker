import React from "react";
import {Row, Col, Input} from "react-materialize";


export const RegisterForm = props => (
					<div>
            <Row> 
                <Input 
                 label="First Name" 
                 type="text"
                 s={6} 
    						 validate
                />    
                <Input
                  label="Last Name"
                  type="text"
                  s={6}
                  validate
                />
            </Row>
            <Row>
               <Input 
                 	label="Email"
                  type="email"
                  s={12}
                  validate
                  data-error="Please enter a valid email address"
                  data-success="Valid Email"
                /> 
            </Row>
            <Row>
	            <Input
	              label="Password"
	              type="password"
	              s={6}
	              validate
	            />
              <Input
                label="Confirm Password"
                type="password"
                s={6}
                validate
              /> 
            </Row>
          </div>
       
)

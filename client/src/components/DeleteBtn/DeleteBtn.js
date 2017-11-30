import React from "react";
import {Button} from 'react-materialize';


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
       <Button className="delete-btn oswald-caps red accent-4" {...props}>
    ✗ Delete
  </Button>

);

export default DeleteBtn;

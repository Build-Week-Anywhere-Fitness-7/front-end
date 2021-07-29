import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";



function Footer (props) {
    return (
      <div class="footer">
        <h2>Anywhere Fitness-7</h2>
        <h6>@Copyright 2021</h6>
          <Button color="primary" size="extralarge" type="submit">
            Learn-More
          </Button>
      </div>
    );
  };
  
  export default Footer;
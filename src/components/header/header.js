import React    from "react";
import template from "./header.jsx";

class header extends React.Component {
  render() {
    return template.call(this);
  }
}

export default header;

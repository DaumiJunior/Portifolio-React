import React    from "react";
import template from "./card.jsx";

class card extends React.Component {
  render() {
    return template.call(this);
  }
}

export default card;

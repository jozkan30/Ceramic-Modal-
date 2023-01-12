import { Component } from "react";
import CardStyle from "./CardStyle.css";

class Card extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card-info">
        <p className="img-info">{item.title}</p>
        <p className="img-info">{item.description}</p>
        <p className="img-info">{item.date}</p>
        <p className="img-info">{item.medium}</p>
      </div>
    );
  }
}

export default Card;

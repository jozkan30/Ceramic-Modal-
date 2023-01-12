import { Component } from "react";
import PicsStyle from "./PicsStyle.css";

class Pics extends Component {
  render() {
    const { item, onClickButton } = this.props;

    return (
      <>
        <img onClick={(e) => onClickButton(e, item)} src={`${item.image}`} className="card-imgs" alt={`${item.id}`} />
      </>
    );
  }
}

export default Pics;

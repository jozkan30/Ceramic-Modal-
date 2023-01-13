import { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import Pics from "./components/Pics";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      openModal: false,
      item: {},
    };
  }

  componentDidMount() {
    fetch(
      "https://www.metmuseum.org/api/collection/collectionlisting?q=&pageSize=0&sortBy=Relevance&sortOrder=asc&geolocation=Japan&showOnly=withImage%7CopenAccess%7ConDisplay&material=Ceramics"
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState(() => {
          return { items: data.results };
        })
      );
  }

  onClickButton = (e, itemInfo) => {
    e.preventDefault();
    this.setState({ openModal: true, item: itemInfo });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    return (
      <div>
        

        <div className="modal-container">
          <div className="frames-container">
            {this.state.items.map((item, i) => {
              return (
                <div className="main" key={i}>
                  <Pics item={item} onClickButton={this.onClickButton} />
                </div>
              );
            })}
            <Modal open={this.state.openModal} onClose={this.onCloseModal}>
              <Card item={this.state.item} />
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

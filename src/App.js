import { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Pics from './components/Pics';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

class App extends Component {

  constructor(){
    super();

  
  this.state={
    items: [],
    openModal : false
  }

}

componentDidMount(){
  fetch('https://www.metmuseum.org/api/collection/collectionlisting?q=&pageSize=0&sortBy=Relevance&sortOrder=asc&searchField=Gallery&showOnly=withImage&material=Ceramics&geolocation=Florence&department=12')
  .then(res=> res.json())
  .then(data => 
    this.setState(()=>{
      return {items: data.results}
    }))
    
}

onClickButton = e =>{
  e.preventDefault()
  this.setState({openModal : true})
}

onCloseModal = ()=>{
  this.setState({openModal : false})
}


render(){
  
  return(
  <div className='frames-container' >
    {this.state.items.map((item)=>{
      const {id} = item;
      return(
        <div className='main' key={id}>
          <Card items={item} />  
          <Pics items={item}  
           onClick={this.onClickButton}
          />
          <p onClick={this.onClickButton}>Click Me</p>
                <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                <Card items={item} />
                </Modal>   
        </div>
          
          
      )

    })}


  </div>
  )

}
}
export default App

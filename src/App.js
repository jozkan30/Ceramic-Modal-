import { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Pics from './components/Pics';


class App extends Component {

  constructor(){
    super();

  
  this.state={
    items: [],


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

render(){
  
  return(
  <div className='frames-container' >
    {this.state.items.map((item)=>{
      const {id} = item;
      return(
        <div className='main' key={id}>
          <Card items={item} />  
          <Pics items={item} />

        </div>
          
          
      )

    })}


  </div>
  )

}
}
export default App

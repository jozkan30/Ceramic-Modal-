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
      const {id, title, description, date, medium} = item;
      return(
        <div className='dscrpt' key={id}>
          <p className='img-info'>{title}</p>
          <p className='img-info'>{description}</p>
          <p className='img-info'>{date}</p>
          <p className='img-info'>{medium}</p>
          <img 
          src={`${item.image}`} 
          className='card-imgs'
          alt={`${item.id}`}/>
          
          <div>
            
          </div>
          </div>
          
      )

    })}


  </div>
  )

}
}
export default App

import { Component } from 'react';
import './App.css';
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
      return(
        <div className='dscrpt' key={item.id}>
          <p className='img-info'>{item.title}</p>
          <p className='img-info'>{item.description}</p>
          <p className='img-info'>{item.date}</p>
          <p className='img-info'>{item.medium}</p>
          <img 
          src={`${item.image}`} 
          className='card-imgs'
          alt={`${item.id}`}/>
          </div>
      )
    })}


  </div>
  )

}


}
export default App

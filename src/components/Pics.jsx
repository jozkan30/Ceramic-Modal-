import { Component } from "react";
import PicsStyle from './PicsStyle.css';

class Pics extends Component{
    render(){
        const {items} = this.props;


        return(
              <>
               <img 
                    src={`${items.image}`} 
                    className='card-imgs'
                    alt={`${items.id}`}
                    
                    />
                  
              </>

                );
              
              }
            }

export default Pics

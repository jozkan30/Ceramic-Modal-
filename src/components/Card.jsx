import { Component } from "react";
import CardStyle from './CardStyle.css'




class Card extends Component{
    render(){
        const {items} = this.props
        return(
            <div className="card-info">
            <p className='img-info'>{items.title}</p>
            <p className='img-info'>{items.description}</p>
            <p className='img-info'>{items.date}</p>
            <p className='img-info'>{items.medium}</p>
            </div>
        )
    }
}


export default Card

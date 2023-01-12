import { Component } from "react";




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


 /* {items.map((item)=>{
                const{ description, date, medium } = item;
                return(
                    <div>
                     <p> {`${description}`} </p>   
                     <p> {date} </p>   
                     <p> {medium} </p>   
                    </div>
                )
                
                })}
        */
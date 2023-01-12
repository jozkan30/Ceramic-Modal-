import { Component } from "react";




class Card extends Component{
    render(){
        const{ items } = this.props

        return(
            <div className="card-info">
            {items.map((item)=>{
                const{ description, date, medium } = item;
                return(
                    <div>
                     <p> {`${description}`} </p>   
                     <p> {date} </p>   
                     <p> {medium} </p>   
                    </div>
                )
                
                })}
             
            </div>
        )
    }
}


export default Card
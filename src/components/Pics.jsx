import { Component } from "react";



class Pics extends Component{
    render(){
        const {items} = this.props;


        return(
                <div className="stuff" >
                  {items.map((item) => {
                    const { id, title} = item;
                    return(
                      <div className='dscrpt' key={id}>
                        <p className='img-info'>{title}</p>
                </div>
                );
                  })}
                </div>
                );
              
              }
            }

export default Pics

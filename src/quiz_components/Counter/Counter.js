import React from 'react';

import './Counter.css'

export class Counter extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        counter:1
      }; }

render () {
      return ( <div className="counter-container">
                <h2>Pytanie <span className="sek"> 
                    {this.state.counter}
                           </span> z <span className="sek"> {5} </span>  </h2>
               </div>
            );
      }
}







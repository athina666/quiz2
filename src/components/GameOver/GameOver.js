import React from 'react';
import './GameOver.css'


const GameOver = (props) => (
    
    <div className="container">
        <div className="gameover">
        <h1>Game Over</h1>
        <p>your score:{props.score} {props.para} </p>
    </div>
    </div>
);

// class GameOver extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text:""
//         } }
//         renderText () {
//             console.log(this.props.score)
           
//         }
//         render() {
//             return  <div>
//             <h1>Game Over</h1>
//             <p>your score:{this.props.score} {this.props.renderText}</p>
            
//         </div>
//         }
// }

export default GameOver;
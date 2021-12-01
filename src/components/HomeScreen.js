import React from 'react';
import '../css/HomeScreen.css'
import Board from './Board';

class HomeScreen extends React.Component {
    constructor(){
        super()
        this.state={}
    }

    render(){
        return(
            <div className="hs">
                <Board />
                <div className="text title--game">Tic-Tac-Toe</div>
            </div>
        )
    }

}

export default HomeScreen;
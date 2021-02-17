import React from 'react';

const Square = ({value, onClick, isWinningSquare}) => {
    return <button 
        type="button" 
        className="square" 
        onClick={onClick}
        //Makes winningsquares bold
        style={{fontWeight: isWinningSquare? "bold" : "normal"}}
        >
        {value}
        </button>;
}

export default Square;

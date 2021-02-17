import React from 'react';

const Square = ({value, onClick, isWinningSquare}) => {
    return <button 
        type="button" 
        onClick={onClick}
        //Makes winningsquares bold
        className={`square ${isWinningSquare ? 'winning' : ''} ${value === 'X' ? 'text-green' : 'text-orange'}`}
        style={{fontWeight: isWinningSquare? "bold" : "normal"}}
        >
        {value}
        </button>;
}

export default Square;

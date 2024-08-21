import React from "react";
import './Character.css'

function Character ({letter, isGuessed}) {
    return (
        <div className="characters">
            {isGuessed ? letter : '__'}
        </div>
    )
}

export default Character;
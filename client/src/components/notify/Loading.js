import React from 'react'
import Diskloader from '../../icons/Diskloader'

const Loading = () => {
    return (
        <div className="position-fixed w-100 h-100 text-center loading" 
        style={{background: "#0008", color: "white", top:0, left:0, zIndex: 50}}>
            <Diskloader>
            </Diskloader>
        </div>
    )
}

export default Loading
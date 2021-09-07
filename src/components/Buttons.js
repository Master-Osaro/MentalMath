import React from 'react'

function Button(props) {
    return (
        <div>
            <button onClick={()=>props.choice(true)}>True</button>
            <button onClick={()=>props.choice(false)}>False</button>
        </div>
       
    )
}
export default Button;
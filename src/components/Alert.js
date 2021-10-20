import React from 'react'

export default function Alert(props) {
    return (
        <div class={`alert ${props.type}`} role="alert">
            {props.message}
        </div>
    )
}

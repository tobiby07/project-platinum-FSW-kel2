import React from 'react'
const Button = ({type, conten}) => {
    return (
        <button className="btn btn-primary rounded-0 my-3 p-2" type={type}>{conten}</button>
    )
}

export default Button
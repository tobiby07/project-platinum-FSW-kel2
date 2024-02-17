import React from 'react'
const Button = ({type, conten}) => {
    return (
        <button className="btn btn-dark btn-lg btn-block" type={type}>{conten}</button>
    )
}
export default Button
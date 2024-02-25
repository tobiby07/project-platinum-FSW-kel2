import React from 'react'
const Button = ({type, conten, onClick}) => {
    return (
        <button className="btn btn-dark btn-lg btn-block" onClick={onClick} type={type}>{conten}</button>
    )
}
export default Button
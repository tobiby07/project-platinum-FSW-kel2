import React from 'react'

const InputForm = ({ type ,value, onChange, id, placeholder, conten})=>{
    return (
        <div  className="form-outline mb-4">
                    <label className="form-label">{conten}</label>
                    <input
                        placeholder={placeholder}
                        type={type}
                        className="form-control form-control-lg"
                        id={id}
                        value={value}
                        onChange={onChange}
                        required
                    />
                </div>
    )
}

export default InputForm
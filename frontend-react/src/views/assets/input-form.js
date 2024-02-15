import React from 'react'

const InputForm = ({ type ,value, onChange, id, placeholder, conten})=>{
    return (
        <div className="mb-3">
                    <label className="form-label font-weight-bold">{conten}</label>
                    <input
                        placeholder={placeholder}
                        type={type}
                        className="form-control rounded-0 font-style-italic"
                        id={id}
                        value={value}
                        onChange={onChange}
                        required
                    />
                </div>
    )
}

export default InputForm
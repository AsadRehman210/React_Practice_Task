import React from 'react'

const FormElements = ({ type, placeholder, label, name }) => {
    return (
        <div className="form-floating mb-3 form_Element_block">
            <input type={type} className="form-control" placeholder={placeholder} name={name} required />
            <label>{label}</label>
        </div>
    )
}

export default FormElements

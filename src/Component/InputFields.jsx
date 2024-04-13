


function InputFields({ id, value, label, onChange, error,name }) {
    return (
        <div className='inputData'>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={name} placeholder={label} value={value} onChange={onChange} />
            <p className="errorsHandel">{error}</p>
        </div>
    )
}

export default InputFields
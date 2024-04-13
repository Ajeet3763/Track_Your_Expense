function SelectField({ id, value, label, onChange, error, name, options, defaultOption }) {
    return (
        <div className='inputData'>
            <label htmlFor={id}>{label}</label>
            <select id={id} name={name} className="selectCat" value={value} onChange={onChange}>

                {
                    defaultOption && (
                        <option value="" hidden>{defaultOption}</option>
                    )
                }

                {
                    options.map((option, i) => {
                        return <option key={i} value={option}>{option}</option>
                    })
                }
            </select>
            <p className="errorsHandel">{error}</p>
        </div>
    )
}

export default SelectField
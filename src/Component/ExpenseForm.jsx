import { useState } from "react";
import InputFields from "./InputFields";
import SelectField from "./SelectField";

function ExpenseForm({ setExpense, expense, setExpenses, edingRowId, setEdingRowId }) {


    const [errors, setError] = useState({})

    const validationConfig = {
        title: [
            { required: true, message: 'Please Enter Title' },
            { minLength: 5, message: 'Title should be atleast 5 Character long' }
        ],
        category: [
            { required: true, message: 'Please Select an Category' }
        ],
        ammount: [{ required: true, message: 'Please Enter Amount' },
        { pattern: /^ (0 | [1 - 9][0 - 9] *)$/, message: 'Please Enter Valid Amount' }],
        email: [{ required: true, message: 'Please Enter Email' },
        {
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Please Put the valid email ID !!'
        }]
    }


    const validate = (formData) => {
        const errorsData = {}

        Object.entries(formData).forEach(([key, value]) => {
            // console.log(key,value)
            validationConfig[key].some((rule) => {
                // console.log(rule);
                if (rule.required && !value) {
                    errorsData[key] = rule.message;
                }
                if (rule.minLength && value.length < 5) {
                    errorsData[key] = rule.message;
                }
                if (rule.pattern && !rule.pattern.test(value)) {
                    errorsData[key] = rule.message;
                }
            })
        })

        setError(errorsData)
        return errorsData
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const validateResult = validate(expense)
        // console.log("results", validateResult)
        if (Object.keys(validateResult).length) return;

        if (edingRowId) {
            setExpenses((prevStateNew) => prevStateNew.map((prevExpense) => {
                if (prevExpense.id === edingRowId) {
                    return { ...expense, id: edingRowId }
                }
                return prevExpense
            }))
            setExpense({
                title: '',
                category: '',
                ammount: ''
            })

            setEdingRowId('')
            return
        }

        setExpenses((prevState) => [...prevState, { ...expense, id: crypto.randomUUID() }])
        setExpense({
            title: '',
            category: '',
            ammount: ''
        })
    }

    const handelChange = (e) => {
        const { name, value } = e.target
        setExpense((prevState) => ({
            ...prevState,
            [name]: value,
        }))
        setError({})
    }

    return (
        <form className='details' onSubmit={handleSubmit}>
            <InputFields
                id="id"
                name="title"
                value={expense.title}
                label="Title"
                onChange={handelChange}
                error={errors.title} />

            <SelectField
                id="id"
                name="category"
                value={expense.category}
                label="Select"
                onChange={handelChange}
                options={[
                    'Grocery', 'Clothes', 'Bills', 'Education', 'Medicine'
                ]}
                defaultOption='Select Category'
                error={errors.category} />

            <InputFields
                id="id"
                name="ammount"
                value={expense.ammount}
                label="Amount"
                onChange={handelChange}
                error={errors.ammount} />

            <InputFields
                id="id"
                name="email"
                value={expense.email}
                label="Email"
                onChange={handelChange}
                error={errors.email} />

            <button className="addBtn">{edingRowId ? 'Save' : 'Add'} </button>
        </form>
    )
}
export default ExpenseForm
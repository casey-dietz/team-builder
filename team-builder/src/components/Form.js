import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [results, setResults] = useState(false)

    const formSubmit = (evt) => {
        evt.preventDefault()
        setResults(false)
        console.log(name, email, role)
        setResults(true)
        setName('')
        setEmail('')
        setRole('')
    }

    return (
        <div className='form-container'>
            <form onSubmit={formSubmit}>
                <label htmlFor='name'>Name:</label>
                <input 
                    type='text' 
                    name='name'
                    value={name} 
                    placeholder='First and Last' 
                    onChange={(evt) => setName(evt.target.value)}
                />
                <label htmlFor='name'>Email:</label>
                <input 
                    type='text' 
                    name='email' 
                    value={email} 
                    placeholder='Email' 
                    onChange={(evt) => setEmail(evt.target.value)}
                />
                <label htmlFor='role'>Role:</label>
                <input 
                    type='text' 
                    name='role' 
                    value={role} 
                    placeholder='Role' 
                    onChange={(evt) => setRole(evt.target.value)}
                />
                <input type='submit' value='submit' />
            </form>
            <h3>Form Results:</h3>
            {results ? 'Form submitted' : ''}
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{role}</h3>
        </div>
    )
}

export default Form

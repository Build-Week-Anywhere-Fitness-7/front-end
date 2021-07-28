import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CreateClass = () => {
    const history = useHistory();

    const initState = {
        Name: '',
        Type: '',
        StartTime: '',
        Duration: '',
        Intensity: '',
        Location: '',
        Attendees: '',
        ClassSize: ''
    }

    const [formValues, setFormValues] = useState(initState)

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('', formValues)
            .then(res => {
                console.log(res)
                history.push('./Profile')
            })
            .catch(err => {
                console.log(err)
            })
        
    }

    return (
        <div className='container'>
            <h2>Create class</h2>
            <form onSubmit={handleSubmit}>
                <input 
                name='Name'
                type='text'
                placeholder='name'
                onChange = {handleChange}
                // value = {}
                />
                <br/>
                <input 
                name='Type'
                type='text'
                placeholder='type'
                onChange = {handleChange}
                // value = {}
                />
                <br />
                <input 
                name='Start time' 
                type='text' 
                placeholder='start time'
                onChange = {handleChange}
                // value = {}
                />
                <br />
                <input 
                name='Duration'
                type='text'
                placeholder='duration'
                onChange = {handleChange}
                // value = {}
                />
                <br />
                <input 
                name='Intensity level'
                type='text'
                placeholder='intensity level'
                onChange = {handleChange}
                // value = {}
                />
                <br />
                <input 
                name='Location'
                type='text'
                placeholder='location'
                onChange = {handleChange}
                // value = {}
                />
                <br />
                <input 
                name='Current number of registered attendees'
                type='number'
                placeholder='0'
                onChange = {handleChange}
                // value = {}
                />
                <br />
                <input 
                name='Max class size'
                type='number'
                placeholder='0'
                onChange = {handleChange}
                // value = {}
                />
            </form>
            <button onClick={handleSubmit}>
                Submit
            </button>
        </div>
    )
}
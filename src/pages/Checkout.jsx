import React from 'react'
import { Form } from 'react-router-dom';

function Checkout({formData, setFormData}) {
    return (
        <div>
            <h2>Checkout Form</h2>
            <Form>
                <input type="text" value={formData.name} placeholder='Eter your name' />
                <input type="email" value={formData.email} placeholder='Eter your Email' />
                <input type='text' value={formData.address} placeholder='Fill address' />

                <button>Submit</button>
            </Form>
        </div>
    )
}

export default Checkout;
import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

// useState Hook | maintains form data with state
// - controlled component: form data maintained by component state
// - uncontrolled component: data is retrieved & submitted directly from the DOM

function ContactForm() {
    // hook | manages form data.
    // - feature: initializes state values. setting initial state to empty strings clears input fields on loading component.
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    // destructure formState object into its named properties
    const { name, email, message } = formState;

    // sync internal state of the component formState with user input from DOM
    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
        }

        // updates formState value for name property. Spread operator '...' retains other key-value pairs in object.
        // - w/o spread operator, formState object will be overwritten to only contain name:value key pair.
        // - below, [...name] refers to the name attribute of the form elment (name, email, message). allows for dynamically created property names.
        setFormState({...formState, [e.target.name]: e.target.value })
    }
    // console.log(formState);

    // submits form data
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onChange={handleChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

// ** pause 20.4.5
export default ContactForm;
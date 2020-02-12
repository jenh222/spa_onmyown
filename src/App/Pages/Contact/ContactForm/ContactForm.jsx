import React, { useRef, useState } from 'react';
import './ContactForm.scss';
import { emailCheck } from '../../../common/utilities.js';

const ContactForm = () => {

    //Keep track of state
    const [emailIsValid, updateEmailIsValid] = useState(true);

    // refs :: Giving React's Virtual DOM access to the Physical DOM element
    const emailRef = useRef();
    const messageRef = useRef();


    const handleClick = () => {
        console.log('you clicked');
    }

    const validateEmail = () => {
        const emailValue = emailRef.current.value;
        console.log('Validate Email', emailValue);

        if (emailValue.length > 3 && !emailCheck(emailValue)) {
            updateEmailIsValid(false);
        } else {
            updateEmailIsValid(true);
        }
    }

    return (
        <div className={ 'ContactForm' }>
            <div className="form-group">
                <div className="left">
                    <label htmlFor="Email">Email</label>
                </div>
                <div className="right">
                    <input 
                        className={ emailIsValid ? '': 'invalid'}
                        ref ={ emailRef } 
                        name="email" 
                        id="email"
                        placeholder="email@youreemail.com"
                        onChange={ validateEmail }
                    />
                </div>
            </div>
            <div className="form-group">
                <div className="left">
                    <label htmlFor="Email">Message</label>
                </div>
                <div className="right">
                    <textarea ref ={ messageRef } name="message" placeholder="Your Message Here"/>
                </div>
            </div>
            <div className="form-group">
                <div className="left" />
                <div className="right">
                    <button
                        onClick={ handleClick }
                    >SEND</button>
                </div>
        </div>
        </div>
    );
}

export default ContactForm;
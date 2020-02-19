import React, { useRef, useState } from 'react';
import './ContactForm.scss';
import { emailCheck } from '../../../common/utilities.js';
import classnames from 'classnames';
import keycode from 'keycode';
import API from '../../../common/API.js';

const ContactForm = () => {

    //Keep track of state
    const [emailIsValid, updateEmailIsValid] = useState(true);
    const [formIsValid, updateFormIsValid] = useState(true);
    const [errors, updateErrorsArray] = useState([]);

    // refs :: Giving React's Virtual DOM access to the Physical DOM element
    const emailRef = useRef();
    const messageRef = useRef();


    const handleFormSubmit = () => {
        console.log('you clicked');

        let errorMessages = [];

        // Validate the user filled in the form
        if (emailRef.current.value.length < 4) {
            errorMessages.push({
                message: 'You forgot to fill out the Email field',
            })
        }
        if (!emailCheck(emailRef.current.value)) {
            errorMessages.push({
                message: 'The email you provided is invalid',
            })
        }
        if (messageRef.current.value.length < 1) {
            errorMessages.push({
                message: 'You forgot to fill out the Message field',
            })
        }

        updateErrorsArray(errorMessages);

        // Keep track of errors - and update the DOM with feedback if there is an error
        if (errorMessages.length > 0) {
            updateFormIsValid(false);
        }else {
            updateFormIsValid(true);
            // If all is successful - we want to post the data
            
            const postData = {
                email: emailRef.current.value,
                message: messageRef.current.value,
            }

            API.post('sendmail', postData).then((result) => {
                console.log('Posting data', result);
            });
        }
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

    const displayErrors = () => {
        return errors.map((error, idx) => {
            return (
                <li key={ idx }>{error.message}</li>
            );
        });
    }

        //Handle keyboard events
    const handleKeyDown = (event) => {
        switch (keycode(event)) {
            case 'space':
            case 'enter':
                handleFormSubmit();
                break;
            default:
                return true;
        }
    }

    //const theClassname = (formIsValid) ? 'ContactForm form-valid':'ContactForm form-invalid';

    const theClassname = classnames({
        'ContactForm': true,
        'form-valid': formIsValid,
        'form-invalid': !formIsValid,
    });

    return (
        <div className={ theClassname }>

            {
                (errors.length > 0) &&
                <div className = "error-message">
                    ERROR MESSAGE HERE
                    <ul>
                        {displayErrors()}
                    </ul>
                </div>
            }

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
                        tab-index={0}
                        onClick={ handleFormSubmit }
                        onKeyDown={ handleKeyDown }
                    >SEND EMAIL</button>
                </div>
        </div>
        </div>
    );
}

export default ContactForm;
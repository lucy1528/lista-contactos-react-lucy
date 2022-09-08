import React, { useRef } from 'react';

import { PropTypes } from 'prop-types';

import Contact from '../../../models/contactClass';

const ContactForm = ({ add }) => {

    const firstNameRef = useRef('')
    const lastNameRef = useRef('')
    const emailRef = useRef('')

    function cleanForm() {
        document.querySelector('.form').reset()

    }

    function addContact(e) {
        e.preventDefault();
        const newContact = new Contact(
            firstNameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            false,
        );
        add(newContact);
        cleanForm();
    }




    return (
        <>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Add new contact
            </button>


            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">New Contact</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={addContact} className='form'>
                                <div className='form-group formContainer'>
                                    <input ref={firstNameRef} id='inputFirstName' className='form-control' type="text" required autoFocus placeholder='Contact first name' />

                                    <input ref={lastNameRef} id='inputLastName' className='form-control' type="text" required autoFocus placeholder='Contact last name'
                                    />

                                    <input ref={emailRef} className='form-control' id='inputEmail' type='email' required autoFocus placeholder='example@mail.com' />
                                </div>
                                {/* <button type='submit' className='addButton'>Add</button> */}
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button data-toggle="modal" data-target="#exampleModal" type="submit" class="btn btn-primary" >Save changes</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );

}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm;

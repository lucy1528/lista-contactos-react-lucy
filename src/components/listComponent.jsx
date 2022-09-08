import React, {useEffect, useState} from 'react';
import Contact from '../models/contactClass';
import ContactComponent from './pure/contact';
import ContactForm from './pure/forms/contactForm'
import PropTypes from 'prop-types';

const ListComponent = () => {
    const defaultContact1 = new Contact('Lucia', 'Cerpa', 'luxysm@gmail.com', false)
    const defaultContact2 = new Contact('Isa', 'Leon', 'isa@gmail.com', true)
    const defaultContact3 = new Contact('Martha', 'Rodriguez', 'martha@gmail.com', false)

    const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3]);

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        console.log('Component state has been modified');
        setLoading(false)
        return () => {
            console.log('Contact component is going to unmount...');
        }
    }, [contacts])

    function addContact(contact) {
        const tempContact = [...contacts];
        let contactFound=false;
            for(let element of tempContact){
                if(element.email === contact.email){
                    contactFound = true;
                }
            };
            if(contactFound !== true){
                tempContact.push(contact);
                setContacts(tempContact);
            }else{
                 return alert("This email has been used")
            }    
            
    
    }    
    

    function onLine(contact){
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact[index].conected = !tempContact[index].conected
        setContacts(tempContact)
    }

    function deleteContact(contact){
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact.splice(index, 1);
        setContacts(tempContact)
    }


    return (
        <div className='containerListContacts'>
            <h2>List of Contacts</h2>
            <div className='listContactsContainer'>
                {
                    contacts.map((contact, index) => {
                        return(
                            <ContactComponent
                                key={index}
                                contact={contact}
                                onLine = {onLine}
                                remove = {deleteContact}
                            >

                            </ContactComponent>
                        )
                })
                }
            </div>
            <ContactForm add={addContact}/>
        </div>
    );
}

ListComponent.propTypes = {
     contact: PropTypes.instanceOf(Contact).isRequired
}

export default ListComponent;

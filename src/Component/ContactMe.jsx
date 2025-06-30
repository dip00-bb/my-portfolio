

import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
const ContactMe = () => {




    return (
        <div id='contact_me'>
            <p className='text-4xl font-extrabold mb-4 text-blue-600 text-center lg:mb-10'>Contact Me</p>

            <div className='flex flex-col md:flex-row gap-6'>
                <div className='flex-1'>
                    <ContactForm/>
                </div>
                <div className='flex-1'>
                    <ContactInfo/>
                </div>
            </div>
            
        </div>
    );
};

export default ContactMe;
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const ContactForm = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_crng6il', 'template_7ulb0pc', form.current, {
            publicKey: 'xYUKe6TvMazUnd0St',
        })
            .then(
                () => {
                    Swal.fire({
                        title: "Drag me!",
                        icon: "success",
                        draggable: true
                    });
                },
                (error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `Something went wrong, ${error}`,
                    });
                },
            );
    };


    return (
        <div className="bg-[#0d1117] text-white px-4 py-10 sm:px-6 lg:px-12 rounded-md">
            <form onSubmit={sendEmail} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm mb-1">Your Name*</label>
                        <input
                            type="text"
                            className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2 px-1"
                            placeholder="John Doe"
                            name='form_name'
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Your Email*</label>
                        <input
                            type="email"
                            className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2 px-1"
                            placeholder="you@example.com"
                            name='form_email'
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Phone Number*</label>
                        <input
                            type="tel"
                            className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2 px-1"
                            placeholder="+880..."
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Your Website*</label>
                        <input
                            type="url"
                            className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2 px-1"
                            placeholder="https://yourwebsite.com"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm mb-1">Write Your Message Here*</label>
                    <textarea
                        rows="5"
                        className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2 px-1 resize-none"
                        placeholder="Your message..."
                        name='message'
                        required
                    ></textarea>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-400 text-black font-semibold py-5 rounded-[1px] transition hover:bg-blue-500"
                    >
                        Send Mail
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
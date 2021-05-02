import React, { useState } from 'react';
import emailjs from 'emailjs-com';


export default function ContactUs() {
    const [successful, setSuccessFul] = useState('');

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_6mb6hyo', 'template_a3ekurq', e.target, 'user_vBZeZLieEQUiv1ugkjnpu')
            .then((result) => {
                setSuccessFul(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }

    return (
        <div>
            <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto pt-2">
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </div>
                    <div className="col-8 form-group mx-auto pt-2">
                        <input type="email" className="form-control" placeholder="Email Address" name="email" />
                    </div>
                    <div className="col-8 form-group mx-auto pt-2">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div>
                    <div className="col-8 form-group mx-auto pt-2">
                        <textarea className="form-control" name="message" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                    </div>
                    <div className="col-8 form-group mx-auto pt-2 text-center">
                        <input type="submit" className="btn btn-info" value="Send Message" />
                    </div>
                    {successful ? <h5 className="text-success text-center mt-5">Thank You!</h5> : ""}
                </div>
            </form>
        </div>
    );
}
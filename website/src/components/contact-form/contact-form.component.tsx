import { useRef, useState } from 'react';
import './contact-form.component.css'
import FormInput from '../form-input/form-input.component'
import FormTextarea from '../form-textarea/form-textarea.component'
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [hasSent, setHasSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.ChangeEvent<any>) => {
    e.preventDefault();

    if(form.current == null) return;

    emailjs.sendForm('service_ujpo5zk', 'template_hajykh7', form.current, 'iuQrkQyp2GL9oz4-f')
      .then((result) => {
          setHasSent(true);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='contact-form' onSubmit={sendEmail} ref={form}>
        <div className={`success-noti ${hasSent ? 'noti-active' : ''}`}>
          <p>Message sent successfully!</p>
        </div>
        <p>Want to send me a message quickly?</p>
        <FormInput name="name" label="Full Name:" />
        <FormInput name="email" label="Email:" />
        <FormTextarea name="message" label="Message:" />
        <button>Send Message</button>
    </form>
  )
}

export default ContactForm
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_u9ccgnr', 'template_cm1tr3v', form.current, {
        publicKey: 'K7kpXBsByxiC_F6eX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("send Message Successfully")
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Invalid data")
        },
      );
  };

  return (
    <form className="form-control"ref={form} onSubmit={sendEmail}>
        <div>
      <label style={{marginTop:"10px", marginRight:"1cm"}}>Name</label>
      <input type="text" name="to_name"  />
      </div>
      <div style={{marginTop:"10px", marginRight:"1cm"}}>
      <label>Email</label>
      <input type="email" name="from_name"  />
      </div>
      <div style={{marginTop:"10px", marginRight:"1cm"}}>
      <label>Message</label>
      <textarea name="message" />
      </div>
     <div>
      <input type="submit" value="Send"  />
      
      </div>
    </form>
  );
};
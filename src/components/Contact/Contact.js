import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact">
            <h2 className="contact-title">Contacto</h2>
            <p className="contact-text">Puedes contactarme a través de mi email: <a href="mailto:email@ejemplo.com" className="contact-link">email@ejemplo.com</a></p>
        </section>
    );
}

export default Contact;

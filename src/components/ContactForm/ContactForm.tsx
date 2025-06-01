import { useState } from "react";
import { Button } from "../../components/"; // Ajusta si es necesario
import "./ContactForm.css";

export const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    // Codificamos los datos en formato que Netlify espera
    const encoded = new URLSearchParams();
    data.forEach((value, key) => {
      encoded.append(key, value.toString());
    });

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded.toString(),
      });

      setShowModal(true);
      form.reset();
    } catch (error: any) {
      alert("Form submission error: " + error.message);
    }
  };

  return (
    <>
      <div className="block contact-form">
        <h2>Send a Message</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-recaptcha="true"
          onSubmit={handleSubmit}

        >
          {/* Requerido para que Netlify reconozca el formulario */}
          <input type="hidden" name="form-name" value="contact" />

          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>

          <div data-netlify-recaptcha="true"></div>

          <Button
            label="Submit contact form"
            text="Send Message"
            type="submit"
          />
        </form>
      </div>

      {showModal && (
        <div className="thank-you-modal">
          <div className="modal-content">
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully.</p>
            <Button
              label="Close thank you modal"
              text="Close"
              onClick={() => setShowModal(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};



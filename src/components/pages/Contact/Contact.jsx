import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss"
import Button from "../../Button";
export const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
	 	e.preventDefault();

		emailjs
			.sendForm(
				"service_l7bikil",
				"template_kedl8ef",
				form.current,
				"HncRqiO4QjMjRDeM3"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	 };

	return (
    <div className="contact-form">
      <h1>Contact</h1>
	  	<form ref={form} onSubmit={sendEmail} >
			<label>Name</label>
			<input type="text" name="user_name" placeholder="Jhon Doe"/>
			<label>Email</label>
			<input type="email" name="user_email"  placeholder="jhon@email.com" />
			<label>Message</label>
			<textarea name="message"  placeholder="Enter your message here..."/>
			<Button type="submit"> Send </Button>
		</form>
    </div>
	);
};


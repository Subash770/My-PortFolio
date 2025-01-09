import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main className="container mx-auto max-width section py-4">
      <h1 className="text-center text-xl md:text-2xl lg:text-4xl text-dark-heading dark:text-light-heading font-medium">
        For any questions please drop a mail
      </h1>
      <h3 className="text-center text-2xl md:text-3xl lg:text-4xl text-gradient font-medium pt-3 md:pt-5">
        <a href={`mailto:${email}`} className="hover:underline">
          {email}
        </a>
      </h3>
      <span className="text-center text-content text-lg font-light block mt-2">or</span>
      <h3 className="text-center text-2xl md:text-3xl lg:text-4xl text-gradient font-medium pt-2">
        <a href={`tel:${phone}`} className="hover:underline">
          {phone}
        </a>
      </h3>
    </main>
  );
}

export default Contact;

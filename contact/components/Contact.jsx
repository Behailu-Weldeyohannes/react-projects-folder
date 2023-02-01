import React from "react";

function Contact({ img, name, phone, email }) {
  // console.log(props);
  return (
    <div className="contact-card">
      <img src={img} />
      <h3>{name}</h3>
      <div className="info-group">
        <img src="https://source.unsplash.com/random/?phone" />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src="https://source.unsplash.com/random/?email" />
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Contact;

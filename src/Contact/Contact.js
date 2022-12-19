import "./contact.css";
import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formState, setFormState] = useState({
    from: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://jacekportfolio55689.netlify.app/send-email", {
        ...formState,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="conatiner-contact">
      <div className="first-box">
        <div>
          <div className="fakeimg"></div>
        </div>
        <div className="work-toge">
          <h1 className="main-text-work">Lorem, ipsum dolor.</h1>
          <p className="about-me">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            voluptatibus alias ea dolorum itaque est aliquam id fuga rerum aut
            sit neque cupiditate fugit voluptates voluptas harum aliquid
            commodi, numquam dolor nemo enim velit reiciendis? At voluptas, eos
            consectetur enim laboriosam dolorem odio, veritatis iste error
            corrupti nemo vero deserunt.
          </p>
          <p className="send-me">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            veritatis quis dolorum asperiores esse at!
          </p>
          <p className="email">lorem@123.pl</p>
          <p className="phone-number">879 456 789</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Email nadawcy:
          <input
            type="email"
            name="from"
            value={formState.from}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email odbiorcy:
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Wiadomość:
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Wyślij</button>
      </form>
    </section>
  );
}

export default Contact;

import "./contact.css";
function Contact() {
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
      <form action="https://formsubmit.co/radek_mikolaj@o2.pl" method="POST">
        <label for="mail">Twój e-mail*</label>
        <input
          type="mail"
          id="mail"
          name="mail"
          placeholder="Wpisz swój adres"
        />
        <label for="msg">Twoja wiadomość*</label>
        <textarea
          name="msg"
          id="msg"
          rows="5"
          placeholder="Wpisz Wiadomość"
        ></textarea>
        <input type="submit" value="Wyślij" />
      </form>
    </section>
  );
}
export default Contact;

import "./contact.css";

function Contact() {
  return (
    <>
      <section className="conatiner-contact">
        <div className="first-box">
          <div>
            <div className="foto"></div>
          </div>
          <div className="work-toge">
            <h1 className="main-text-work">Let's work together!</h1>
            <p className="about-me">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              voluptatibus alias ea dolorum itaque est aliquam id fuga rerum aut
              sit neque cupiditate fugit voluptates voluptas harum aliquid
              commodi, numquam dolor nemo enim velit reiciendis? At voluptas,
              eos consectetur enim laboriosam dolorem odio, veritatis iste error
              corrupti nemo vero deserunt.
            </p>
            <p className="send-me">
              Send me a message and find out how I can help you or your
              business!
            </p>
            <a href="mailto:filmgolda@gmail.com" className="email">
              <span>
                E-mail: <b>filmgolda@gmail.com</b>
              </span>
            </a>
            <a href="tel:+48790482403" className="phone-number">
              <span>
                Numer kontaktowy: <b>790 482 403</b>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;

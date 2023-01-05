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
              Hi, my name is Jacek. I am a filmmaker living in Kielce. I have
              been creating films for 14 years and specialize mainly in music
              videos, commercials, animations but also feel good in corporate
              productions and documentaries. For a long time I have been helping
              people and companies to create their image using the language of
              film. Contact me and I may be able to help you too.
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

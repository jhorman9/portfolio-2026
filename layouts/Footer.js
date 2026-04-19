import ContactForm from "@/components/ContactForm";

const Footer = () => {
  return (
    <div className="nicolas_sm_section" id="contact">
      <div className="nicolas_sm_footer">
        <div className="container">
          <div className="extra_container">
            <div className="footer_in">
              <div className="left">
                <div className="title">
                  <h3>
                    <span>¿Necesitas un proyecto? Hablemos de tu idea y hagámosla realidad juntos. Estoy aquí para ayudarte a construir algo grande.</span>
                  </h3>
                </div>
                <div className="contact">
                  <ul>
                    <li>
                      <div>
                        <span>Contáctame</span>
                      </div>
                      <a href="tel:+50765961547">(+507) 6596-1547</a>
                      <a href="mailto:softwaredeveloper@jhorman.com">softwaredeveloper@jhorman.com</a>
                    </li>
                    <li>
                      <div>
                        <span>Dirección</span>
                      </div>
                      <p>Panamá</p>
                      <p>Ciudad de Panamá, Punta Paitilla</p>
                    </li>
                  </ul>
                </div>
                <div className="social_button">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/Jhorman1D" target="_blank" rel="noopener noreferrer">
                        <span>Facebook</span>
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/jhormandev" target="_blank" rel="noopener noreferrer">
                        <span>Linkedin</span>
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/jhorman9/" target="_blank" rel="noopener noreferrer">
                        <span>Github</span>
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/50765961547" target="_blank" rel="noopener noreferrer">
                        <span>WhatsApp</span>
                        <img
                          className="sm_svg"
                          src="img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

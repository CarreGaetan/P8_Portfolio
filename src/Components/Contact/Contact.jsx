import emailjs from 'emailjs-com';
import './Contact.scss';
import iconPhone from '../../Assets/iconContact/iconPhone.png';
import iconEmail from '../../Assets/iconContact/iconEmail.png';
import iconLinkdin from '../../Assets/iconContact/iconLinkdin.png';
import iconInstagram from '../../Assets/iconContact/iconInstagram.png';

function Contact() {
    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_a1zb4ro', 'template_sn0momt', e.target, 'rUozu5RAYKbrF5-lX')
          .then((result) => {
            alert('Message envoyé avec succès !');
            e.target.reset(); // Réinitialise les champs du formulaire
          }, (error) => {
            alert("Erreur lors de l'envoi du message.");
          });
      };
      
    return (
        <div className='contact_bg'>
            <div className='title'>
                <h2>Me contacter</h2>
            </div>
            <div className="contact">
                <div className="infos">
                    <h1>Mes informations</h1>
                    <ul>
                        <li>
                            <img src={iconPhone} alt="Phone Icon" />
                            <span>06.66.36.61.82</span>
                        </li>
                        <li>
                            <img src={iconEmail} alt="Email Icon" />
                            <span>gaetancarre.ct@gmail.com</span>
                        </li>
                        <li>
                            <img onClick={() => window.open("https://www.linkedin.com/in/ga%C3%ABtan-carr%C3%A9-4649162aa/")} style={{ cursor: 'pointer' }} src={iconLinkdin} alt="LinkedIn Icon" />
                            <span>Gaëtan Carré</span>
                        </li>
                        <li>
                            <img onClick={() => window.open("https://www.instagram.com/g.carre/")} src={iconInstagram} style={{ cursor: 'pointer' }} alt="Instagram Icon" />
                            <span>g.carre</span>
                        </li>
                    </ul>
                </div>
                <form className="contact_message" onSubmit={sendEmail}>
                    <h1>Message</h1>
                    <div className="contact_form">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name='email' placeholder='Entrez votre email' required />
                    </div>
                    <div className="contact_form">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="Votre message" rows={4} required />
                    </div>
                    <button type="submit" className="contact__submit-button">Envoyer</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;

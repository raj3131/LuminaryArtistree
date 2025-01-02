import phoneIcon from '../icons/phone.png';
import instaicon from '../icons/instagram.png'
import gmailicon from '../icons/gmail.png'

function Contact (){
    return (
        <section id="cont" className="contact">
        <h1>Contact</h1>
            <p class="conpara">We'd love to hear from you! Whether you have a project in mind or simply want to learn more about our services, feel free to reach out. Let's create something amazing together!</p>


            <div className="icons" >
                <div className="contact-item">
                    <img src={instaicon} alt="Instagram Logo" class="icon"/>
                    <span>Instagram</span>
                </div>
                <div className="contact-item">
                <img src={phoneIcon} alt="Telephone Icon" className="icon" />
                    <span>8600226346</span>
                </div>
                <div className="contact-item">
                    <img src={gmailicon} alt="Email Icon" class="icon"/>
                    <span>amadkaikarparshuram819@gmail.com</span>
                </div>
            </div>
        </section>
    )
}

export default Contact;
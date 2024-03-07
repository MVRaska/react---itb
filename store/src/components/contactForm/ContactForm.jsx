
const ContactForm =() => {

    return <form>
        <h2>Contact us</h2>
        <div>
            <label>Your name:</label>
            <br />
            <input type='text' />
        </div>
        <div>
            <label>Your email:</label>
            <br />
            <input type='email' />
        </div>
        <div>
            <label>Your message:</label>
            <br />
            <textarea col='30' row='10' />
        </div>
        <input type="submit" value="Send Message" />
    </form>
}

export default ContactForm;
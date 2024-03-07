import { Link } from "react-router-dom";

const Footer = () => {

    return <>
        <p>Please contact us and discover how we can help you.</p>
        <Link to='/contact'>CONTACT</Link>
        
        <p>You can view our <Link to='/terms'>Terms Of Service</Link> and <Link to='/privacy'>Privacy Policy</Link> for more information.</p>
        <p>&copy; 2024 Online Store</p>
    </>
}

export default Footer;
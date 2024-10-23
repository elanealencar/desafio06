import './Footer.css';
import logo from '../images/logo.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className='footerName'>2024 Elane</div>
            <div className="footerPowered">
                <div>Powered by</div>
                <img src={logo} />
            </div>
        </div>
    )
}

export default Footer;
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <footer className="footer-distributed">

    <div className="footer-left">

        <h3>ANSHIKA<span>CREACTION</span></h3>



        <p className="footer-company-name">ANSHIKA CREACTION © 2023</p>
    </div>

    <div className="footer-center">

        <div>
            <i className="fa fa-map-marker"></i>
            <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
        </div>

        <div>
            <i className="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
        </div>

        <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">support@company.com</a></p>
        </div>

    </div>

    <div className="footer-right">

        <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className="footer-icons">

            <a href="#"><FacebookIcon/></a>
            <a href="#"><InstagramIcon/></a>
        </div>

    </div>

</footer>
  )
}

export default Footer
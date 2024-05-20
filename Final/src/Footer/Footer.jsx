import Log from '../assets/mintlogo.jpg'
import './Footer.css'
function Footer(){
    return(
        <footer>
    <div className="container1">
        <div className="footer-col">
            <h2>Logo</h2>
             <img className='footer-para' src={Log} alt="mint-log"  />  
        </div>
        <div className="footer-col">
            <h3 className="text-office">
                Office
                <div className="underline"><span></span></div>
            </h3>
           
            <p>2QF4+G2G, Arada 1/2</p>
            <p>Addis Abeba, Ethiopia</p>

            <p className="email">info@mint.gov.et</p>
            <p className="phone">011 126 5737</p>
        </div>
        <div className="footer-col">
            <h3>
                Menu
                <div className="underline"><span></span></div>
            </h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
                
            </ul>
        </div>
        <div className="footer-col">
            <h3>
                Newsletter
                <div className="underline"><span></span></div>
            </h3>
            <form action="">
                <i className="fa-solid fa-envelope"></i>
                <input className='input' type="text" placeholder="Enter Company Email" />
                <a href=""><i className="fa-solid fa-arrow-right"></i></a>
            </form>
            <div className="social-icons">
                <a href="https://www.facebook.com/MInT.Ethiopia/" target='_blank'><i className="fa-brands fa-facebook"></i></a>
                <a href="https://t.me/MinTEthiopia" target='_blank'> <i className="fa-brands fa-telegram" ></i></a>
                <a href="https://www.youtube.com/@MinistryofInnovationandTechnol" target='_blank'><i className="fa-brands fa-youtube"></i></a>
                {/* <a href="#" target='_blank'><i className="fa-brands fa-google-plus"></i></a> */}
                <a href="https://et.linkedin.com/company/ministry-of-innovation-and-technology-ethiopia" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </div>
    </footer>

        
    )
}
export default Footer
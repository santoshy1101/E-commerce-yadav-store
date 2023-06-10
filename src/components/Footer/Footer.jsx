import './Footer.scss'
import './Footer.scss'
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa'
import Payment from '../../assets/payments.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ad
            repellendus obcaecati, iure nihil sit eaque quisquam vero voluptas,
            eum ex quis quam? Recusandae animi repudiandae delectus, ipsam
            laudantium aliquam?
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Karan Kunj Ghatal Mahaniwas Bhiwadi Alwar Rajasthan, 301019
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 9931 272 0261</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: store@yadav.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <div className="text">Headphones</div>
          <div className="text">Smart Watches</div>
          <div className="text">Bluetooth Speakers</div>
          <div className="text">Wireles Earbuds</div>
          <div className="text">Home Theatre</div>
          <div className="text">Projectors</div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <div className="title">Home</div>
          <div className="text">About</div>
          <div className="text">Privacy Policy</div>
          <div className="text">Returns</div>
          <div className="text">Terms & Conditions</div>
          <div className="text">Contact Us</div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            YADAVSTORE 2023 CREATED BY SANTOSH YADAV. PREMIUM E-COMMERCE
            SOLUTIONS.
          </div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer


import '../footer/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className='rrss-logos'>
           
            <a href="https://www.instagram.com/webspymes/">
                <img src= '../../src/assets/icons/Instagram.svg'></img>
            </a>

            <a href="https://www.tiktok.com/@webspymes/">
                <img src="../../src/assets/icons/TikTok.svg" ></img>
            </a>

            <a href="https://www.linkedin.com/company/webspymes-es/">
                <img src="../../src/assets/icons/LinkedIn.svg"></img>
            </a>
        </div>

        <div className='copyright'>
            Copyright © 2024 WEBSPYMES
        </div>
    </footer>

)
}

export default Footer;
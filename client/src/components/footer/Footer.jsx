
import '../footer/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className='rrss-logos'>
            <img 
            className='rrss-instagram' 
            src= '../../src/assets/icons/Instagram.svg' 
            a href='https://www.instagram.com/webspymes/'>
            </img>

            <img     
            className='rrss-tiktok' 
            src="../../src/assets/icons/TikTok.svg" 
            a href="https://www.tiktok.com/@webspymes/">
            </img>

            <img 
            className='rrss-linkedin'
            src="../../src/assets/icons/LinkedIn.svg"
            a href="https://www.linkedin.com/company/webspymes-es/">
            </img>
        </div>

        <div className='copyright'>
            Copyright © 2024 WEBSPYMES
        </div>
    </footer>

)
}

export default Footer;
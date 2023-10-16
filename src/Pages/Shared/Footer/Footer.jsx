import img from '../../../../public/logo.png';
import { CiFacebook } from 'react-icons/ci';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { BiLogoLinkedin } from 'react-icons/Bi';

const Footer = () => {
    return (
        <div className='mt-28'>
            <div className="px-32 bg-gradient-to-r from-[#0076CE] to-[#9400D3]">
            <footer className="footer pt-9 pb-8 text-[#FFFFFF]">
  <aside>
    <img className='w-[138px] h-[45px] filter invert' src={img} alt="" />
    <p>India's first platform dedicated to <br /> simplifying partner search</p>
  </aside> 
  <nav>
    <header style={{lineHeight: '16px'}} className="font-bold">COMPANY</header> 
    <a className="link link-hover">About </a> 
    <a className="link link-hover">Pricing</a> 
    <a className="link link-hover">Careers</a>
  </nav> 
  <nav>
    <header style={{lineHeight: '16px'}} className="font-bold">SOLUTIONS</header> 
    <a className="link link-hover">Search</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Research</a> 
    <a className="link link-hover">Academy</a>
  </nav> 
  <nav>
    <header style={{lineHeight: '16px'}} className="font-bold">RESOURCES</header> 
    <a className="link link-hover">Blogs</a> 
    <a className="link link-hover">Forms</a>
  </nav>
  <nav>
    <header style={{lineHeight: '16px'}} className="font-bold">SUPPORT</header> 
    <a className="link link-hover">Help</a> 
    <a className="link link-hover">Contact Us</a>
  </nav>
  <nav>
    <header style={{lineHeight: '16px'}} className="font-bold">LEGAL</header> 
    <a className="link link-hover">Privacy</a> 
    <a className="link link-hover">Terms</a> 
    <a className="link link-hover">Accessibility</a>
  </nav>
</footer>
<footer style={{lineHeight: '16px'}} className="footer pb-10 pt-8 border-t text-[#FFFFFF#FFFFFF#FFFFFF#FFFFFF] border-base-300">
  <aside className="items-center grid-flow-col">
    
    <p className='text-[#FFFFFF]'>Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>
  </aside> 
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4 filter invert">
      <CiFacebook className='w-5 h-5'></CiFacebook>
      <BsInstagram className='w-5 h-5'></BsInstagram>
      <BiLogoLinkedin className='w-5 h-5'></BiLogoLinkedin>
      <BsWhatsapp className='w-5 h-5'></BsWhatsapp>
    </div>
  </nav>
</footer>
        </div>
        <footer className="footer footer-center text-xs p-4 bg-black text-[#FFFFFF]">
        <aside>
          <p>Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved</p>
        </aside>
      </footer>
        </div>
    );
};

export default Footer;
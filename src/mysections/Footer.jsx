import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { twitter } from "../assets/icons";
import { instagram } from "../assets/icons";
import { facebook } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
              <img src={facebook} width={24} height={24} />
            </div>
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
              <img src={twitter} width={24} height={24} />
            </div>
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
              <img src={instagram} width={24} height={24} />
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          <div>
            <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">Product</h4>
            <ul>
              <li className="mt-3 text-white font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                <a href="/">Nike-Air-Jordan-152</a>
              </li>
              <li className="mt-3 text-white font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                <a href="/">Nike-Air-Jordan-001</a>
              </li>
              <li className="mt-3 text-white font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                <a href="/">Nike-Air-Jordan-45</a>
              </li>
              <li className="mt-3 text-white font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                <a href="/">Nike-Air-Jordan-147</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          <div>
            <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">Help</h4>
            <ul>
              <li className="mt-3 text-white font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                <a href="/">About Us</a>
              </li>
              <li className="mt-3 text-white font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                <a href="/">How it works</a>
              </li>
              <li className="mt-3 text-white font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                <a href="/">Privacy policy</a>
              </li>
              <li className="mt-3 text-white font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                <a href="/">FAQs</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          <div>
            <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">Get In Touch</h4>
            <ul>
              <li className="mt-3 text-white font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                <a href="/">rochapetoh@hotmail.com</a>
              </li>
              <li className="mt-3 text-white font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                <a href="/">+1 000 000 0000</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copy right sign" width={20} height={20} className="rounded-full m-0" />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer;
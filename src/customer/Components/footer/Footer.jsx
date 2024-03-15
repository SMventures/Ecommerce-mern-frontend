import { Facebook, Instagram, WhatsApp, Email } from '@mui/icons-material';
import FAQ from './FAQ';
import About from './About'

function Footer() {
  return (
    <footer className="relative bg-gray-900 pt-8 pb-6">
      <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-3 lg:justify-end items-right"> 
        <div className="w-full md:w-1/2 px-4">
            <h4 className="text-3xl font-semibold text-white">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-white">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex">
              {/* Facebook icon */}
              <Facebook className="bg-white text-Blue-700 shadow-lg font-normal h-12 w-12 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2" style={{ fontSize: 24 }} />

              {/* Instagram icon */}
              <Instagram className="bg-white text-purple-400 shadow-lg font-normal h-12 w-12 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2" style={{ fontSize: 24 }} />

              {/* WhatsApp icon */}
              <WhatsApp className="bg-white text-green-400 shadow-lg font-normal h-12 w-12 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2" style={{ fontSize: 24 }} />

              {/* Email icon */}
              <Email className="bg-white text-red-400 shadow-lg font-normal h-12 w-12 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2" style={{ fontSize: 24 }} />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="flex flex-wrap items-top mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <span className="block uppercase text-white text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-none">
                  <li>
                    <a className="text-white hover:text-Gray-400 font-semibold block pb-2 text-sm" href="/About">About Us</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/About">Products</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Services</a>
                  </li>
                  <li>
                    {/* <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a> */}
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <span className="block uppercase text-white text-sm font-semibold mb-2">SUPPORT</span>
                <ul className="list-none">
                  <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/FAQ">FAQ</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/Terms">Terms & Privacy</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Pricing</a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <span className="block uppercase text-white text-sm font-semibold mb-2">CONTACT US</span>
                <ul className="list-none">
                  {/* Contact links */}
                  <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Send your Queries</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Email us</a>
                  </li>
                  {/* <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Call us</a>
                  </li> */}
                  <li>
                    {/* <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Pricing</a> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between ">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
}


export default Footer;

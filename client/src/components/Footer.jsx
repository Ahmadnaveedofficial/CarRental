import React from "react";
import { assets } from "../assets/assets.js";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 text-sm text-gray-500 mt-30">
      <div className="flex flex-wrap justify-between items-start gap-8 pb-6 border-b border-borderColor">
        <div>
          <img src={assets.logo} alt="logo" className=" h-8 md:h-9" />
          <p className="max-w-80 mt-3">
            Premium car rental service with a wide selection of luxury and
            everyday vehicles for all your driving needs.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <a href="#">
              <img src={assets.facebook_logo} alt="" className="w-5 h-5" />
            </a>
            <a href="#">
              <img src={assets.instagram_logo} alt="" className="w-5 h-5" />
            </a>
            <a href="#">
              <img src={assets.twitter_logo} alt="" className="w-5 h-5" />
            </a>
            <a href="#">
              <img src={assets.gmail_logo} alt="" className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-base font-medium uppercase text-gray-800">
            Quick Links
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5 ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Browse Cars</a>
            </li>
            <li>
              <a href="#">List Your Car</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-medium uppercase text-gray-800">
            Resources
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5 ">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Insurance</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-medium uppercase text-gray-800">
            Contact
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5 ">
            <li>362 A Johar Town</li>
            <li>Lahore, Pakistan</li>
            <li>
              <a
                href="https://wa.me/923239942960"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                +92 323 9942960
              </a>
            </li>
            <li>
              <a
                href="mailto:ahmadnaveedofficial05@gmail.com"
                className="hover:text-primary transition"
              >
                ahmadnaveedofficial05@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">Cookies</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

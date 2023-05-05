import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-200">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Company
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/" className=" hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Brand Center
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Help center
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Discord Server
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Twitter
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Facebook
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Licensing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Download
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    iOS
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Android
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Windows
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    MacOS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-sm text-center pb-10">
            © 2023 <Link to="/">YourHR</Link>. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

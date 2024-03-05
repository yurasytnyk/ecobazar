import Link from "next/link";

import { TwitterIcon } from "@/components/icons/twitter-icon";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { PinterestIcon } from "@/components/icons/pinterest-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";

export const Socials = () => {
  return (
    <ul className="flex ml-auto">
      <li>
        <Link
          href="https://www.facebook.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="transition-colors duration-300 text-gray-500 hover:bg-success-main hover:text-white rounded-full size-10 flex items-center justify-center"
        >
          <FacebookIcon />
        </Link>
      </li>

      <li>
        <Link
          href="https://twitter.com/?lang=en"
          rel="noopener noreferrer"
          target="_blank"
          className="transition-colors duration-300 text-gray-500 hover:bg-success-main hover:text-white rounded-full size-10 flex items-center justify-center"
        >
          <TwitterIcon />
        </Link>
      </li>

      <li>
        <Link
          href="https://www.pinterest.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="transition-colors duration-300 text-gray-500 hover:bg-success-main hover:text-white rounded-full size-10 flex items-center justify-center"
        >
          <PinterestIcon />
        </Link>
      </li>

      <li>
        <Link
          href="https://www.instagram.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="transition-colors duration-300 text-gray-500 hover:bg-success-main hover:text-white rounded-full size-10 flex items-center justify-center"
        >
          <InstagramIcon />
        </Link>
      </li>
    </ul>
  );
};

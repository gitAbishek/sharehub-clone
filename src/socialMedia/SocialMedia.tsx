import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaGooglePlay,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <>
      <ul className="flex md:hidden lg:flex xl:flex 2xl:flex  flex-start gap-5 items-center text-white pt-5 md:pt-10">
        <li>
          <a
            href="https://www.facebook.com/darkmattergamesproduction"
            target="no-target"
          >
            <FaFacebookF className="font-semibold text-2xl hover:cursor-pointer" />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/company/dark-matter-game-production/"
            target="no-target"
          >
            <FaLinkedinIn className="font-semibold text-2xl hover:cursor-pointer" />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/darkmattergameproduction/"
            target="no-target"
          >
            <FaInstagram className="font-semibold text-3xl hover:cursor-pointer" />
          </a>
        </li>

        <li>
          <FaTwitter className="font-semibold text-2xl hover:cursor-pointer" />
        </li>

        <li>
          <a
            href="https://play.google.com/store/apps/details?id=com.DarkMatterGames.SpriteNInja"
            target="no-target"
          >
            <FaGooglePlay className="font-semibold text-2xl hover:cursor-pointer" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@darkmattergameproduction2786"
            target="no-target"
          >
            <FaYoutube className="font-semibold text-3xl hover:cursor-pointer" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialMedia;

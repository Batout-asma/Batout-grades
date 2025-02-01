import Image from "next/image";
import { footerLinks } from "@/app/constants";

function Footer() {
  return (
    <footer className="flex flex-col text-white mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.png"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-300">
            Batout Grades 2025 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
          {footerLinks.map((link) => (
            <div className="footer__link" key={link.title}>
              <h3 className="font-semibold text-lg mb-4">{link.title}</h3>
              <div className="space-y-3">
                {link.links.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="block text-gray-400 hover:text-white transition duration-300 ease-in-out"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

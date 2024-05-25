import { footerLinks } from "@/constant";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            CarHub 2024 <br />
            Developed By{" "}
            <span className="uppercase text-primary-blue">hasan moosavi</span>
            <br />
            &copy; All right Reserved
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={uuidv4()} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link href={item.url} key={uuidv4()} className="text-gray-500">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023</p>
        <div className="footer__copyrights-link">
          <Link href={"/"} className="text-gray-500">
            Private Policy
          </Link>
          <Link href={"/"} className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

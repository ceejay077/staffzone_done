import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { footer } = menu;
  return (
    <footer className="section bg-theme-light pb-0" >
      <div className="container" >
        {/* footer menu */}

        <div className="flex flex-col items-center" style={{ alignSelf: "center" }}>
          <div className="md-12 sm:col-6 lg:col-3 mx-auto" style={{ textAlign: "center" }}>
            <div className="flex flex-col items-center">
              <Link href="/" aria-label="Bigspring" className="items-center" >
                <Image
                  src={config.site.logo}
                  width={config.site.logo_width}
                  height={config.site.logo_height}
                  alt=""
                />
              </Link>
            </div>
            <br />
            {/* {markdownify(footer_content, "p", "mt-3 mb-6")} */}
            <Social source={social} className="social-icons mb-8" />
          </div>
        </div>

        {/* copyright */}

        <div style={{ textAlign: "center" }}>
          <p>Design and Developed by <a href="#">Naveen Chamara.</a></p>
        </div>


      </div>


      <br />

      {/* social icons */}


      {/* {markdownify(footer_content, "p", "mt-3 mb-6")} */}







    </footer >
  );
};

export default Footer;

"use client";

import {
  FaRegEnvelope,
  FaRegKeyboard,
  FaTasks,
  FaShare,
  FaArrowRight,
} from "react-icons/fa";
import Image from "next/image";

export default function Contact() {
  const cards = [
    {
      title: "For Mojo Helpdesk",
      href: "https://www.mojohelpdesk.com/contact-us/",
      icon: <FaRegEnvelope size={58} className="my-[1.65rem]" />,
    },
    {
      title: "For Das Keyboard",
      href: "https://www.daskeyboard.com/contact-us/",
      icon: <FaRegKeyboard size={65} className="my-[1.65rem]" />,
    },
    {
      title: "For Bamzooka",
      href: "https://bamzooka.com/contact/",
      icon: <FaTasks size={58} className="my-[1.65rem]" />,
    },
    {
      title: "For Metadot & Montastic",
      href: "https://support.metadot.com/login/create_request#/ticket-form/13",
      icon: <FaShare size={58} className="my-[1.65rem]" />,
    },
  ];
  return (
    <>
      <section className="section-mojo bg-[#2b70a9] text-white">
        <div className="container mx-auto px-[15px]">
          <h1 className="mb-[1.1rem]">Questions? We are here to help</h1>
          <div className="sc-cards-container flex rounded justify-center mx-auto mb-[1.65rem] mt-[3.3rem] px-[3.3rem] max-w-[1110px] ">
            {cards.map((card, i) => (
              <a
                key={i}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-[0.55rem] ${
                  i !== cards.length - 1 ? "mr-[1.65rem]" : ""
                }`}
              >
                <div className="  flex flex-1 flex-col ">
                  <div className="icon pl-[1.1rem]">{card.icon}</div>
                  <div className="sc-card-body px-[1.1rem]">
                    <h6 className="text-left mt-[0.55rem]">{card.title}</h6>
                  </div>
                  <div className="sc-card-footer flex items-center px-[1.1rem]">
                    GO TO SUPPORT
                    <FaArrowRight size={17} className="ml-auto" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="section-mojo">
        <div className="container mx-auto max-w-[1110px]">
          <div className="px-[15px] my-[3.3rem]">
            <h3 className="!mb-[1.65rem] text-left">
              Our international offices
            </h3>

            <div className="grid grid-cols-2 ">
              <div>
                <p className="flex items-center !mb-0">
                  <Image
                    src="/flags/us-flag.webp"
                    alt="USA flag"
                    width={30}
                    height={20}
                    className="mr-2"
                  />
                  <strong>Austin, Texas, USA (HQ)</strong>
                </p>
                <div className="text-left">
                  <small>
                    Metadot Corporation <br /> 14400 Piper Glen Dr <br />{" "}
                    Austin, Texas 78738-6528 <br /> USA <br />
                    <br />
                    Tel:{" "}
                    <a
                      href="tel:+15126379983"
                      className="text-[#2b70a9] hover:underline"
                    >
                      +1 512-637-9983
                    </a>
                    <br />
                    Fax: +1 512-233-5335
                  </small>
                </div>
              </div>

              <div>
                <p className="flex items-center !mb-0">
                  <Image
                    src="/flags/france-flag.webp"
                    alt="France flag"
                    width={30}
                    height={20}
                    className="mr-2"
                  />
                  <strong>France</strong>
                </p>

                <div className="text-left">
                  <small>
                    29 bis, Rue de la Prairie <br /> 78120 Rambouillet - FRANCE
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid container-lg my-[3.3rem] px-[15px]">
            <iframe
              title="Metadot Austin HQ Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.190763988241!2d-97.89932172358396!3d30.341740605810878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644c7597e2bb5fb%3A0x9a3b5ebee7e3c6a5!2s14400%20Piper%20Glen%20Dr%2C%20Austin%2C%20TX%2078738!5e0!3m2!1sen!2sus!4v1691619392720!5m2!1sen!2sus"
              width="100%"
              height="350"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
